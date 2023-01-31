import React, { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useGmail } from "../../hooks/useGmail"

type UserProfileRes = {
  emailAddress: string
  messagesTotal: number
  threadsTotal: number
  historyId: string
}

type MailListRes = {
  messages: MessageList[]
  nextPageToken: string
  resultSizeEstimate: number
}

type MessageList = {
  id: string
  threadId: string
}

type Message = {
  id: string
  threadId: string
  labelIds: [string]
  snippet: string
  historyId: string
  internalDate: string
  sizeEstimate: number
  raw: string
  payload: {
    partId: string
    mimeType: string
    filename: string
    headers: [
      {
        name: string
        value: string
      },
    ]
    body: {
      attachmentId: string
      size: number
      data: string
    }
  }
}

export const SignIn: React.FC = () => {
  // ユーザーのプロフィール
  const [profile, setProfile] = useState<UserProfileRes | undefined>(undefined)

  // mailListで取得した結果。idとthreadidしかない。
  const [mailList, setMailList] = useState<MailListRes | undefined>(undefined)

  // mailListで取得した結果から、詳細を取得して格納
  const [mails, setMails] = useState<Message[]>([])

  const { gmailAuthEndpoint, toAuthCode, res, hasError, invalidCode } =
    useGmail()

  // リダイレクトされたときにurlにcodeがのっかってくるのでuseRouterでクエリを取得する。
  // http://localhost:3000/login?code=111jashaみたいな感じで返ってくる。
  const router = useParams()
  const code = router.query

  // クエリでcodeが取れた場合、AccessTokenと交換する。
  useEffect(() => {
    if (code != null) {
      toAuthCode(code as string)
    }
  }, [code])

  // プロフィールを取得するapiのendpoint。yourmailaddressにはOAuthで入力したメールアドレスを入力。
  const endpoint =
    "https://gmail.googleapis.com/gmail/v1/users/mochimochidaifucu@gmail.com/profile"

  // メールのリストを取得するapiのendpoint。yourmailaddressにはOAuthで入力したメールアドレスを入力。
  // 以下apiのResponceはidとthreadidしかないため、データが取れた後詳細をgetする
  const mailEndpoint =
    "https://gmail.googleapis.com/gmail/v1/users/mochimochidaifucu@gmail.com}/messages"

  // profileを取得する関数
  const getProfile = useCallback(() => {
    if (res?.access_token != null) {
      axios
        .get<UserProfileRes>(endpoint, {
          headers: {
            Authorization: `Bearer ${res.access_token}`,
          },
        })
        .then((res) => setProfile(res.data))
    }
  }, [res])

  // メールのリストを取得する関数
  const getEmail = useCallback(() => {
    if (res?.access_token != null) {
      axios
        .get<MailListRes>(mailEndpoint, {
          headers: {
            Authorization: `Bearer ${res.access_token}`,
          },
          params: {
            maxResults: 500,
            includeSpamTrash: false,
            q: "After: 2022/03/09 ",
          },
        })
        .then((res) => setMailList(res.data))
    }
  }, [res])

  // mailListが変わったタイミング→メールのリストを取得したタイミングで発火
  useEffect(() => {
    if (mailList != null && res != null) {
      // Promise<AxiosResponse<Message>>の配列が返ってくるため後ほどPrimise.allをする必要あり。
      const data = mailList.messages.map(async (mail: MessageList) => {
        // yourmailaddressはOAuthで使用したアドレス。
        const endpoint = `https://gmail.googleapis.com/gmail/v1/users/mochimochidaifucu@gmail.com/messages/${mail.id}`
        return await axios.get<Message>(endpoint, {
          headers: {
            Authorization: `Bearer ${res.access_token}`,
          },
        })
      })

      // 上記で返ってきたPromise<AxiosResponse<Message>>を調理
      Promise.all(data).then((result) => {
        const arr = result.map((r) => r.data)
        setMails(arr)
      })
    }
  }, [mailList])

  // subjectはheaders（配列）の中のnameが"Subject"となっているものなので、それ用の関数
  // headers: [
  //   {
  //     name: "Subject"
  //     value: "メールのタイトルが入ります。"
  //   },
  //   {
  //     name: "Subject"
  //     value: "メールのタイトルが入ります。2"
  //   }
  // ]
  const getSubject = (mail: Message): string => {
    const sub = mail.payload.headers.filter((h) => h.name === "Subject")
    if (sub != null && sub.length > 0) {
      return sub[0].value
    }
    return "not found subject"
  }

  return (
    <div>
      <p>login page.</p>
      <button
        onClick={() => {
          window.location.href = gmailAuthEndpoint
        }}
      >
        認証
      </button>
      <p>{code}</p>
      {hasError && <p>エラーがあります。再認証してください。</p>}
      {invalidCode && <p>認証に失敗しました。再度認証してください。</p>}
      {res && (
        <>
          <ul>
            <li>accessToken: {res.access_token}</li>
            <li>refreshToken: {res.scope}</li>
            <li>expiresIn: {res.expires_in}</li>
            <li>tokenType: {res.token_type}</li>
          </ul>
          <button onClick={getProfile}>プロフィール取得</button>
        </>
      )}
      {
        // Profileが取得出来たらここに表示するようにする。
        profile && (
          <>
            <ul>
              <li>emailAddress: {profile.emailAddress}</li>
              <li>historyId: {profile.historyId}</li>
              <li>messagesTotal: {profile.messagesTotal}</li>
              <li>threadsTotal: {profile.threadsTotal}</li>
            </ul>
            <button onClick={getEmail}>get mail</button>
          </>
        )
      }
      {
        // mailの詳細get後に一気に表示されるようにする。
        mails.length > 0 && (
          <>
            {mails.map((m, index) => {
              return (
                <>
                  <ul>
                    <li>{getSubject(m)}</li>
                    <li>snippet: {m.snippet}</li>
                  </ul>
                </>
              )
            })}
          </>
        )
      }
    </div>
  )
}
