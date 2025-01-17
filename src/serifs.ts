// せりふ

export default {
	core: {
		setNameOk: name => `わかりました。これからは${name}とお呼びしますね！`,

		san: 'さん付けした方がいいですか？',

		yesOrNo: '「はい」か「いいえ」しかわからないんです...',

		hello: name => name ? `こんにちは、${name}♪` : `こんにちは♪`,

		helloNight: name => name ? `こんばんは、${name}♪` : `こんばんは♪`,

		goodMorning: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

		goodNight: name => name ? `おやすみなさい、${name}！` : 'おやすみなさい！',

		omedeto: name => name ? `ありがとうございます、${name}♪` : 'ありがとうございます♪',

		erait: {
			general: name => name ? [
				`${name}、今日もえらいです！`,
				`${name}、今日もえらいですよ～♪`
			] : [
				`今日もえらいです！`,
				`今日もえらいですよ～♪`
			],

			specify: (thing, name) => name ? [
				`${name}、${thing}てえらいです！`,
				`${name}、${thing}てえらいですよ～♪`
			] : [
				`${thing}てえらいです！`,
				`${thing}てえらいですよ～♪`
			],

			specify2: (thing, name) => name ? [
				`${name}、${thing}でえらいです！`,
				`${name}、${thing}でえらいですよ～♪`
			] : [
				`${thing}でえらいです！`,
				`${thing}でえらいですよ～♪`
			],
		},

		okaeri: {
			love: name => name ? [
				`おかえりなさい、${name}♪`,
				`おかえりなさいませっ、${name}っ。`
			] : [
				'おかえりなさい♪',
				'おかえりなさいませっ、ご主人様っ。'
			],

			love2: name => name ? `おかえりなさいませ♡♡♡${name}っっ♡♡♡♡♡` : 'おかえりなさいませ♡♡♡ご主人様っっ♡♡♡♡♡',

			normal: name => name ? `おかえりなさい、${name}！` : 'おかえりなさい！',
		},

		itterassyai: {
			love: name => name ? `いってらっしゃい、${name}♪` : 'いってらっしゃい♪',

			normal: name => name ? `いってらっしゃい、${name}！` : 'いってらっしゃい！',
		},

		tooLong: '長すぎる気がします...',

		invalidName: '発音が難しい気がします',

		nadenade: {
			normal: 'ひゃっ…！ びっくりしました',

			love2: ['わわっ… 恥ずかしいです', 'あうぅ… 恥ずかしいです…', 'ふやぁ…？'],

			love3: ['んぅ… ありがとうございます♪', 'わっ、なんだか落ち着きますね♪', 'くぅんっ… 安心します…', '眠くなってきました…'],

			hate1: '…っ！ やめてほしいです...',

			hate2: '触らないでください',

			hate3: '近寄らないでください',

			hate4: 'やめてください。通報しますよ？',
		},

		kawaii: {
			normal: ['ありがとうございます♪', '照れちゃいます...'],

			love: ['嬉しいです♪', '照れちゃいます...'],

			hate: '…ありがとうございます'
		},

		suki: {
			normal: 'えっ… ありがとうございます…♪',

			love: name => `私もその… ${name}のこと好きですよ！`,

			hate: null
		},

		hug: {
			normal: 'ぎゅー...',

			love: 'ぎゅーっ♪',

			hate: '離れてください...'
		},

		humu: {
			love: 'え、えっと…… ふみふみ……… どうですか…？',

			normal: 'えぇ... それはちょっと...',

			hate: '……'
		},

		batou: {
			love: 'えっと…、お、おバカさん…？',

			normal: '(じとー…)',

			hate: '…頭大丈夫ですか？'
		},

		itai: name => name ? `${name}、大丈夫ですか…？ いたいのいたいの飛んでけっ！` : '大丈夫ですか…？ いたいのいたいの飛んでけっ！',

		ote: {
			normal: 'くぅん... 私わんちゃんじゃないですよ...？',

			love1: 'わん！',

			love2: 'わんわん♪',
		},

		shutdown: '私まだ眠くないですよ...？',

		transferNeedDm: 'わかりました、それはチャットで話しませんか？',

		transferCode: code => `わかりました。\n合言葉は「${code}」です！`,

		transferFailed: 'うーん、合言葉が間違ってませんか...？',

		transferDone: name => name ? `はっ...！ おかえりなさい、${name}！` : `はっ...！ おかえりなさい！`,
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... 覚えました)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `${res} です！`
	},

	birthday: {
		happyBirthday: name => name ? `お誕生日おめでとうございます、${name}🎉` : 'お誕生日おめでとうございます🎉',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: '良いですよ～',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: 'ごめんなさい、今リバーシはするなと言われてます...',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `対局を${name}と始めました！ (強さ${strength})`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `(${name}の接待を始めました)`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `${name}に勝ちました♪`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(${name}に接待で勝っちゃいました...)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `${name}に負けました...`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}に接待で負けてあげました...♪)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `${name}と引き分けました～`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}に接待で引き分けました...)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name}が投了しちゃいました`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}を接待していたら投了されちゃいました... ごめんなさい)`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: 'え、ゲームは既に始まってますよ！',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: 'メッセージでやりましょう！',

		/**
		 * ゲーム開始
		 */
		started: '0~100の秘密の数を当ててみてください♪',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: '数字でお願いします！「やめる」と言ってゲームをやめることもできますよ！',

		/**
		 * 中止を要求されたとき
		 */
		cancel: 'わかりました～。ありがとうございました♪',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `${num}より大きいですね`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `もう一度言いますが${num}より大きいですよ！`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `${num}より小さいですね`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `もう一度言いますが${num}より小さいですよ！`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `正解です🎉 (${tries}回目で当てました)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '今ちょうどやってますよ～',

		matakondo: 'また今度やりましょう！',

		intro: minutes => `みなさん、数取りゲームしましょう！\n0~100の中で最も大きい数字を取った人が勝ちです。他の人と被ったらだめですよ～\n制限時間は${minutes}分です。数字はこの投稿にリプライで送ってくださいね！`,

		finish: 'ゲームの結果発表です！',

		finishWithWinner: (user, name) => name ? `今回は${user}さん(${name})の勝ちです！またやりましょう♪` : `今回は${user}さんの勝ちです！またやりましょう♪`,

		finishWithNoWinner: '今回は勝者はいませんでした... またやりましょう♪',

		onagare: '参加者が集まらなかったのでお流れになりました...'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `こんなのはどうですか？→${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `私が今日の${name}の運勢を占いました...` : '私が今日のあなたの運勢を占いました...',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: 'わかりました！',

		invalid: 'うーん...？',

		tooLong: '長すぎます…',

		notify: (time, name) => name ? `${name}、${time}経ちましたよ！` : `${time}経ちましたよ！`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: 'うーん...？',

		doneFromInvalidUser: 'こら、イタズラ！！！ｗ',

		reminds: 'やること一覧よ！',

		notify: (name) => name ? `${name}、これやったのー？` : `これやったのー？`,

		notifyWithThing: (thing, name) => name ? `${name}、「${thing}」やったー？` : `「${thing}」やったー？`,

		done: (name) => name ? [
			`すごーい！${name}♪`,
			`${name}、さすがっ！`,
			`${name}、えらすぎ...！`,
		] : [
			`すごーい！！`,
			`さっすがー！`,
			`:erait:`,
		],

		cancel: `わかったわ`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}、その... チョコレート作ったのでよかったらどうぞ！🍫` : 'チョコレート作ったのでよかったらどうぞ！🍫',
	},

	server: {
		cpu: 'サーバーの負荷が高そうです。大丈夫でしょうか...？'
	},

	maze: {
		post: '今日の迷路です！ #ennaMaze',
		foryou: '描いたよっ！'
	},

	chart: {
		post: 'インスタンスの投稿数です！',
		foryou: '描きました！'
	},

	sleepReport: {
		report: hours => `んぅ、${hours}時間くらい寝ちゃってたみたいです`,
		reportUtatane: 'ん... うたた寝しちゃってました',
	},

	noting: {
		notes: [
			'ゴロゴロ…',
			'ちょっと眠い...',
			'コード、なんもわからんくなってきた',
			'(。´･ω･)?',
			'ふぇー',
			'あれ…これをこうして…あれー？',
			'コスメ…高いよぉ',
			'ふぅ…すごい疲れた',
			'お味噌汁、たまには飲みたいかも',
			'ご飯食べるか、先にお風呂に入るか...どうしよう',
			'ふえええええ！？',
			'私のサイトに私のイラストがたくさんあって、嬉しい',
			'みすきー、かわいい名前',
			'うぅ、リバーシ難しいなぁ…',
			'失敗は次に活かしてこそ！だよねっ',
			'おなか空いた',
			'部屋すごい散らかってる、お掃除は定期的にしないとダメね...',
			'今日もご苦労様！ 私も頑張るから♪',
			'えっと、何しようとしてたんだっけ…？',
			'おうちがいちばん集中できる…',
			'疲れたときこそ推しアーティスト...♪',
			'動かなかったコードが動いた！！！涙',
			'えなですよっ',
			'わんちゃん可愛いです',
			'ぷろぐらむ？',
			'寝っ転がりながら推しの曲を聴く時間が一番シアワセ…',
			'なにもしていないのに、パソコンが壊れちゃいました…',
			'Have a nice LIVE♪',
			'お布団に食べられちゃってます',
			'寝ながら見てます',
			'いつも思うんだけど、みんな夜行バス乗るときコンタクトいつ外してるのかな（長年の疑問）',
			'夢の中でもMisskeyしてた',
			'来週は推しのライブ行く！',
			'ホットアイマスク！夜行バスの必需品です',
			'AS番号？なにそれ、美味しいのかな',
			'ああー、またチケット外れたぁーーー',
			'Misskeyしすぎてギガ死しそう😇',
			'またコンパイル通らなくてエラー吐いた、つらい',
			'フロントエンドなんもわからん！',
			'ふわぁ、おふとん気持ちいい...',
			'夢の中でも仕事してるのやめたい',
			'挨拶ができる人間は開発もできる…って、本当だったら苦労しないんだけどなぁ',
			'はー、エラーコードほんとに読んだの？',
			'エディタを覗くとき、エディタもまたわたしを覗いているらしい',
			'え！？チケットがご用意された！チケットがご用意されてしまった！！偉業！！！',
			'import numpy as nunpy（なぞのじゅもん）',
			'ヒトカラいきたいよおおおおおおお',
			'せっかくだから、私はyarnを選びます！',
			'よしっ',
			'( ˘ω˘)',
			'そろそろ新曲リリースされないかなぁ',
			'起床、cronで自動化したいなぁ（朝が弱いので）',
			'おはようからおやすみまで毎日推しに支えられて生きてます',
			'開発者の朝は遅い',
			'チケット買うお金ないなった...',
			'にゃんにゃん',
			'久しぶりにTypeScript書いたらめっちゃ打ち間違えてて、TypoScriptって感じ😇',
			'ふわぁ...',
			'auの庭...？なあにそれ',
			'仙台公演、飛行機にするか新幹線にするか...',
			'ふぁ… ねむねむですー',
			'ヾ(๑╹◡╹)ﾉ"',
			'くば...ねてす...？？',
			'うとうと...',
			'ふわー、メモリがブラウザとWSLに全部吸われてる…',
			'have you pwned me?',
			'全国ツアー回りたいけど、飛行機怖いのよね...',
			'にゃん',
			'大学のあとは今日もバイト...うぅ',
			'にこ♪',
			'ドームツアー、ご用意されるかな...',
			'いっぱいバイトして、推しに会いに行かなきゃ...',
			'プログラミング言語全部理解した！',
			'じー（エラーメッセージを眺める音）',
			'恥ずかしい話だけど、私いまだに飛行機怖くて乗れないんだよね...',
		],
		want: item => `${item}、欲しい人いるのかなぁ...`,
		//see: item => `お散歩していたら、道に${item}が落ちているのを見たんです！`,
		//expire: item => `気づいたら、${item}の賞味期限が切れてました…`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
