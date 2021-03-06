import * as React from "react";
import styled from "@emotion/styled";

const Text = styled.p`
  margin-bottom: 1em;
`;

const Author = styled.p`
  margin-bottom: 100px;
  text-align: right;
`;

const TopRecruitBanner = () => (
  <>
    <Text>
      私たちエイミーは、『みんなが輝く多様な未来を創る』というミッションを掲げるITベンチャーです。
      <br />
      まだ誰も知らない。だけどあったら便利で手放せなくなるようなサービスをお届けするために、日々企画・開発に努めております。
    </Text>
    <Text>
      ところで…。みんなが輝くって？
      <br />
      私たちがこのミッションを掲げてから頻繁に受ける質問です。
    </Text>
    <Text>
      ご質問をいただくのにも納得です。”みんな”という曖昧な表現をミッションに使っている企業は目新しいからです。
      <br />
      しかし、これには理由があります。
    </Text>
    <Text>
      それは、”世界中のみんな”へ「まだ知らない」をお届けしたいから。
      <br />
      コアターゲットだけでなく、興味関心を持っていないユーザーにもその分野の素晴らしさや感動を知ってもらいたいからです。
      <br />
      そのためには、固定観念にとらわれることなく、俯瞰的な視点を持って何事にも取り組むことが大切だと考えています。
    </Text>
    <Text>
      このミッションを追求することについて、利益が求められるビジネスの世界においては甘い考えだとご指摘を受けたこともあります。
      <br />
      ただの綺麗事だと言われてしまえば、それまでなのかもしれません。
      <br />
      しかし私たちは、あえてこの理想を掲げ続けています。
    </Text>
    <Text>それはなぜか？</Text>
    <Text>
      自分以外の誰かを想う気持ちが、まだ見ぬ世界的なプロダクトを生むと、”社内のみんな”が知っているからです。
      <br />
      これは誰か一人が実行に移すだけでは意味がありません。むしろそれでは自身の負担だけが増えてしまい、会社での居心地も悪くなってしまうでしょう。
    </Text>
    <Text>
      しかしエイミーには、価値観は多様であると「認め合う」、互いの技術を「高め合う」、会社全体が一つのプロフェッショナルなチームであるという「想い合う」文化が形成されています。
      <br />
      そして、”社内のみんな”が”世界中のみんな”に輝いてほしいと願い開発されたプロダクトは、『アイデアで日本発(初)の世界的ベンチャーになる』というビジョンを必然的に成し遂げると信じています。
    </Text>
    <Text>
      営業力だけではなく、資金力だけでもない。技術力だけでもなければ、発想力だけでもない。
      <br />
      私たちは、自分以外の誰かを輝かせられる総合力で高い理想へと突き進みます。
    </Text>
    <Text>夢は大きく、志は高く。</Text>
    <Text>
      一人ひとりへ豊かさをお届けし、”世界中のみんな”がそれぞれの幸せを得られる社会の実現へ。
      <br />
      エイミーは、その理想に向かって挑戦を続けて参ります。
    </Text>
    <Author>代表取締役　竹本裕佑</Author>
  </>
);

export default TopRecruitBanner;
