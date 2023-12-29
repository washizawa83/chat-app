import { writable } from "svelte/store"

export const selectedReplyMessage = writable(null)
export const replyMessages = writable([])

export const testMessages = writable([
    {
      id: 1,
      message: "18:00開始の「SPY×FAMILY」の映画のチケットを落としてしまいました。\n見かけた方いらっしゃいましたら連絡いただきたいです。",
      updated: "2023/12/23 17:45"
    },
    {
      id: 2,
      message: "「あの花」と「ウォンカとチョコレート工場」で迷っています。\nどちらの方がお勧めでしょうか？",
      updated: "2023/12/23 18:05"
    },
    {
      id: 3,
      message: "館内に喫煙所はありますでしょうか？",
      updated: "2023/12/23 18:30"
    },
    {
      id: 4,
      message: "「PREFECT DAYS」めちゃくちゃ良かったです！\n是非皆さん見てみてください。\n\n[あらすじ]\n東京・渋谷でトイレ清掃員として働く平山（役所広司）は、\n静かに淡々とした日々を生きていた。\n同じ時間に目覚め、同じように支度をし、同じように働いた。\nその毎日は同じことの繰り返しに見えるかもしれないが、\n同じ日は1日としてなく、\n男は毎日を新しい日として生きていた。\nその生き方は美しくすらあった。男は木々を愛していた。\m木々がつくる木漏れ日に目を細めた。\nそんな男の日々に思いがけない出来事がおきる。\n",
      updated: "2023/12/23 19:20"
    }
])

export const testReplyMessages = writable([
    {
        id: 1,
        messageId: 1,
        message: "入口のあたりに落ちていました。\n自分、館内の奥から2番目の椅子に座っていますのお渡しします！",
        updated: "2023/12/23 17:53"
    },
    {
        id: 2,
        messageId: 4,
        message: "他の映画と迷っていたのですが、「PREFECT DAYS」見ます！\nありがとうございます！！",
        updated: "2023/12/23 19:30"
    }
])

// 現在地取得フラグ
export const isGetLocation = writable(false)