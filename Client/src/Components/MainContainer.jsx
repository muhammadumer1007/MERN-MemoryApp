import React from 'react'
import PostContainer from './PostContainer'
import PostForm from './PostForm'
import SideSection from './SideSection'

function MainContainer() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <PostContainer />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <SideSection />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainContainer