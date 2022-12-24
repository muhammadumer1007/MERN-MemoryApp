import React from 'react'

function SearchPosts() {
    return (
        <>
            <div className="searchContainer">
                <form>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search By Title" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Search By Tags" />
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btnPink w-100" id="exampleFormControlInput1" value='Search' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default SearchPosts