export default {
  title: 'Pages/Article Form',
  parameters: {
    layout: 'fullscreen',
  },
};

export const ArticleForm = () => (
  <>
    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>

      <ul className="navbar-links">
        <li className="nav-item">
          <input className="rw-form-control" type="text" placeholder="Search" />
        </li>
        <li className="nav-item">
          <a className="rw-btn-primary" href="">
            Create article
          </a>
        </li>
        <li className="nav-item">
          <a className="rw-link" href="">
            <img className="rw-avatar" src="avatar.png" alt="user avatar" />
          </a>
        </li>
      </ul>
    </nav>
    <main className="rw-main">
      <section className="rw-article-form-header">
        <h2>Create new article</h2>
        <img
          className="rw-avatar-xl rw-article-form-header__cover"
          src="avatar.png"
          alt="user avatar"
        />
      </section>
      <aside className="rw-navbar-horizontal rw-article-form__navbar">
        <ul>
          <li>
            <a className="rw-link rw-active" href="">
              Edit
            </a>
          </li>
          <li>
            <a className="rw-link" href="">
              Preview
            </a>
          </li>
        </ul>
      </aside>
      <form className="rw-article-form">
        <fieldset className="rw-form-group">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" className="rw-form-control" />
        </fieldset>
        <fieldset className="rw-file-form-group">
          <label>Cover image</label>
          <div className="rw-file-form-group__input">
            <div>Drag and drop the file here</div>
            <div>- OR -</div>
            <button type="button" className="rw-btn-primary">
              Browse files
            </button>
          </div>
          <input type="file" className="rw-input-file" />
        </fieldset>
        <fieldset className="rw-form-group">
          <label htmlFor="description">Description</label>
          <input id="description" type="text" className="rw-form-control" />
        </fieldset>
        <fieldset className="rw-form-group">
          <label htmlFor="body">Article content</label>
          <textarea id="body" className="rw-form-control" rows={8}></textarea>
        </fieldset>
        <fieldset className="rw-form-group">
          <label htmlFor="tags">Tags</label>
          <input id="tags" type="text" className="rw-form-control" />
          <div className="tag-list"></div>
        </fieldset>
        <button className="rw-btn-primary" type="submit">
          Publish
        </button>
      </form>
    </main>
  </>
);
ArticleForm.storyName = 'edit mode';

export const ArticleFormPreview = () => (
  <>
    <nav className="navbar">
      <a className="navbar-title" href="">
        conduit
      </a>

      <ul className="navbar-links">
        <li className="nav-item">
          <input className="rw-form-control" type="text" placeholder="Search" />
        </li>
        <li className="nav-item">
          <a className="rw-btn-primary" href="">
            Create article
          </a>
        </li>
        <li className="nav-item">
          <a className="rw-link" href="">
            <img className="rw-avatar" src="avatar.png" alt="user avatar" />
          </a>
        </li>
      </ul>
    </nav>
    <main className="rw-main">
      <section className="rw-article-form-header">
        <h2>Create new article</h2>
        <img
          className="rw-avatar-xl rw-article-form-header__cover"
          src="avatar.png"
          alt="user avatar"
        />
      </section>
      <aside className="rw-navbar-horizontal rw-article-form__navbar">
        <ul>
          <li>
            <a className="rw-link" href="">
              Edit
            </a>
          </li>
          <li>
            <a className="rw-link rw-active" href="">
              Preview
            </a>
          </li>
        </ul>
      </aside>
      <form className="rw-article-form">
        <section className="rw-article-header">
          <hgroup className="rw-article-header__title">
            <a className="rw-article-author__container" href="">
              <img className="rw-avatar-sm" src="avatar.png" alt="user avatar" />
              <div className="rw-article-author__content">
                <span>Gerome Grignon</span>
                <span className="rw-date">December 9, 2022</span>
              </div>
            </a>
            <h2>
              Try to transmit the HTTP card, maybe it will override the multi-byte hard drive!
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur
              blanditiis, cumque, debitis dicta error facere, id in ipsum iste maiores minus
              nesciunt numquam perspiciatis quo quod ratione reiciendis rerum.
            </p>
          </hgroup>
          <img className="rw-article-header__cover" src="avatar.png" alt="user avatar" />
          <button className="rw-btn-secondary rw-btn-follow">Like me</button>
        </section>
        <ul className="rw-tag-list-horizontal rw-article-header__tags">
          <li className="rw-tag">
            <a href="">#web</a>
          </li>
          <li className="rw-tag">
            <a href="">#chill</a>
          </li>
          <li className="rw-tag">
            <a href="">#batman</a>
          </li>
        </ul>
        <section className="rw-article__content">
          <p>
            Favicons, short for “favorite icons,” are small images or icons that appear in the
            browser tab, bookmarks, and other areas of the browser UI. Adding a favicon to your
            Storybook application can help to:
          </p>
          <ul>
            <li>
              Improve branding and visual appeal: A well-designed favicon can help to reinforce your
              brand and make your Storybook application more visually appealing.
            </li>
            <li>
              Enhance user experience: Favicons can make it easier for users to find and recognize
              your Storybook application among multiple tabs or bookmarks, enhancing the user
              experience.
            </li>
            <li>
              Build trust and credibility: A favicon can also help build trust and credibility with
              your users by demonstrating attention to detail and a commitment to providing a
              professional and high-quality application.
            </li>
          </ul>
          <p>
            Adding a favicon is a small but significant step that can help improve the user
            experience and make your Storybook application more memorable and distinctive.
          </p>
          <p>
            So why not take this small but impactful step today and give your Storybook application
            that extra touch of visual appeal and professionalism?
          </p>
        </section>
        <button className="rw-btn-primary" type="submit">
          Publish
        </button>
      </form>
    </main>
  </>
);
ArticleFormPreview.storyName = 'preview mode';
