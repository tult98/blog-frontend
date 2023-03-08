import MarkdownEditor from '~/components/widgets/MarkdownEditor'

const ArticleForm = () => {
  return (
    <div className="flex flex-col w-full pb-12 space-y-4">
      <div className="w-full form-control">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          placeholder="Enter your title"
          className="w-full input input-bordered focus:outline-none"
        />
      </div>
      <div className="w-full form-control">
        <label className="label">
          <span className="label-text">Slug</span>
        </label>
        <input
          type="text"
          placeholder="Slug will be updated base on the title"
          className="w-full input input-bordered focus:outline-none"
          disabled
        />
      </div>
      <div className="w-full form-control">
        <label className="label">
          <span className="label-text">Preface</span>
        </label>
        <input
          type="text"
          placeholder="Describe about the article shortly"
          className="w-full input input-bordered focus:outline-none"
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <textarea
          className="h-24 textarea textarea-bordered focus:outline-none"
          placeholder="Description"
        ></textarea>
      </div>
      <MarkdownEditor />
      <div className="self-end mt-8">
        <button className="btn btn-primary">Create</button>
      </div>
    </div>
  )
}

export default ArticleForm
