import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import FileBase from 'react-file-base64'

function PostForm() {
    let { addMemoryFormData, setaddMemoryFormData, addMemoryFormOnSubmit } = useContext(GlobalContext)
    return (
        <>
            <div className="searchContainer mt-3">
                <h3 className='text-center'>Create Memory</h3>
                <form className='mt-3' onSubmit={addMemoryFormOnSubmit}>
                    <div className="mb-3">
                        <input type="text" className="form-control" name='title' placeholder="Title" onChange={(e) => setaddMemoryFormData({ ...addMemoryFormData, title: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                        <textarea type="text" className="form-control" name='description' placeholder="Memory" onChange={(e) => setaddMemoryFormData({ ...addMemoryFormData, description: e.target.value })} required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" name='tags' placeholder="Tags" onChange={(e) => setaddMemoryFormData({ ...addMemoryFormData, tags: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setaddMemoryFormData({...addMemoryFormData, selectedFiles: base64})}
                        />
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btnPink w-100" value='Create' />
                        <input type="reset" className="btnPink w-100 mt-2" value='Reset' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default PostForm