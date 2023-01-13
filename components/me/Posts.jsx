import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import { IoAlertCircleOutline, IoHeartOutline, IoHeartSharp } from "react-icons/io5"
import { look, timePosts } from "../../lib/observerFunctions"

const Posts = ({ state }) => {

    let search

    console.log(state.posts)

    if (state.posts == undefined) {
        search = state.myPosts.concat().reverse()
    } else {
        search = state.posts
    }


    function sendReaction({ ev, key, post_id }) {
        ev.stopPropagation()
        let setNew = search
        let setting

        if (state.posts == undefined) {
            setting = state.setMyPosts
        } else {
            setting = state.setPosts
        }
    

        let data = { type: 'post', id: post_id }
        axios.post("/api/reaction", data).then((response) => { return response.data }).then(response => {
            if (response.react) {
                setNew[key].youLike = true
                setNew[key].likes = response.likes
                setting(setNew => [...setNew])
            } else {
                setNew[key].youLike = false
                setNew[key].likes = response.likes
                setting(setNew => [...setNew])
            }
        })


    }







    return search?.map((response, key) => (
        <div className="post container-me" key={key}>
            <div className="top">
                <div className="photo" style={{ background: `url(${look(response.user?.look)})` }}></div>
                <div className="info">
                    <Link className="username" href={`@${response.user.username}`}>@{response.user.username}</Link>
                    <span className="time">Publicado el {timePosts(response.time)}</span>

                    <button className="report"><IoAlertCircleOutline /></button>
                </div>
            </div>

            <div className="content">
                <span className="text">{response.desc_text} {state.count}</span>

            </div>

            <div className="options">
                <button className={`reaction ${response.youLike == true ? 'like' : ''}`} onClick={(ev) => { sendReaction({ ev, key, post_id: response.id }) }}><IoHeartOutline className="unlike" /> <IoHeartSharp className="like" /> <span className="count">{response.likes}</span></button>
            </div>
        </div>
    ))
}

export default Posts