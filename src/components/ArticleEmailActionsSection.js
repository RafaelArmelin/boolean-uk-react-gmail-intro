const {
  default: ArticleEmailBodySection,
} = require("./ArticleEmailBodySection");

function ArticleEmailActionsSection() {
  return (
    <section className="email-actions">
      <button>Reply</button>
      <button>Forward</button>
    </section>
  );
}
export default ArticleEmailActionsSection;
