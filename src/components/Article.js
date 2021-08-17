import ArticleTitle from "./ArticleTitle";
import ArticleHeader from "./ArticleHeader";
import ArticleEmailBodySection from "./ArticleEmailBodySection";
import ArticleEmailActionsSection from "./ArticleEmailActionsSection";

function Article() {
  return (
    <article className="email-content">
      <ArticleTitle />
      <ArticleHeader />
      <ArticleEmailBodySection />
      <ArticleEmailActionsSection />
    </article>
  );
}
export default Article;
