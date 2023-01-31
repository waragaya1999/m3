import { useCallback, useState } from "react"
import axios from "axios"
type TokenRes = {
  access_token: string
  token_type: string
  expires_in: string
  scope: string
}
export const useGmail = () => {
  const [res, setRes] = useState<TokenRes | undefined>(undefined)
  const [hasError, setHasError] = useState<boolean>(false)

  const [invalidCode, setInvalidCode] = useState<boolean>(false)

  const clientId =
    "437919103933-28nh4d3bb4rf6o6tkqosfmp4bnje957f.apps.googleusercontent.com"
  const clientSecret = "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"
  const redirectUrl = "http://localhost:3000/login"
  const apiScope = "https://www.googleapis.com/auth/gmail.modify"
  const urlBase =
    "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id="
  const getTokenUrl = "https://accounts.google.com/o/oauth2/token"
  const gmailAuthEndpoint = `${urlBase}${clientId}&redirect_uri=${redirectUrl}&scope=${apiScope}`

  const toAuthCode = useCallback((code: string) => {
    // ここのジェネリックを指定することでAxiosResponseのdataの型が決まる。
    axios
      .post<TokenRes>(getTokenUrl, {
        code: code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUrl,
        grant_type: "authorization_code",
      })
      .then((res) => setRes(res.data))
      .catch((e) => {
        // 確か200以外が返った場合はこっち。
        // invalid_grantが返ってきた場合、codeが使用済みのケースが多い。
        console.log(e.response.data.error)
        console.log({ error: e })
        if (e.response.data.error === "invalid_grant") {
          setInvalidCode(true)
        } else {
          setHasError(true)
        }
      })
  }, [])
  return {
    gmailAuthEndpoint,
    toAuthCode,
    res,
    hasError,
    invalidCode,
  } as const
}
