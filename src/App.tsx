
import { Header } from './components/header.js'
import { Post, PostType } from './components/Post.jsx'
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar.tsx';

const posts: PostType[] = [

  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/116197683?v=4',
      name: 'Maria Eduarda Bruning',
      role: 'Estudante'
    },
    content:[
      {type: 'paragraph', 
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
      
      {type: 'paragraph', 
      content:'Nemo molestiae ullam deserunt cumque, ipsum cum nam eaque totam eligendi, natus numquam culpa debitis ut voluptatibus.'},
      
      {type:'link', content:'#lorem'},
      
    ],
    publishedAt: new Date('2024-05-30 11:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/116197683?v=4',
      name: 'Maria Eduarda Bruning',
      role: 'Estudante'
    },
    content:[
      {type: 'paragraph', 
      content:'Projeto ReactJS da Rocketseat.'},
      
      {type: 'paragraph', 
      content:'Novo projeto.'},
      
      {type:'link', content:'#novoprojeto'},
      
    ],
    publishedAt: new Date('2024-05-28 11:00:00'),
  },
];

export function App() {
  
  return (
    <div>
     <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
       <main>
        {posts.map(post => {
          return(
         <Post
         key={post.id}
         post={post}
         />
        )
         }
         )
        }

      </main>
   </div>
   </div>
  )
}











