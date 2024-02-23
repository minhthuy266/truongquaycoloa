import {useEffect, useState} from "react"
import {api} from "../../utils"

const AboutScreen = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.posts
      .browse({
        limit: 4,
        include: "tags,authors",
        filter: "tag:gioi-thieu",
      })
      .then((posts) => {
        setPosts(posts)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <div className='text-black container mx-auto mt-[120px] global-text-base custom-min-height'>
      <div className='container pb-24'>
        <div dangerouslySetInnerHTML={{__html: posts[0]?.html}}></div>
      </div>
    </div>
  )
}

export default AboutScreen
