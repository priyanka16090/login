import React from 'react'
import { useEffect, useState } from 'react';

function Data() {
  const deletid=(id)=>{
    alert(id);

  }

  const [posts, setPosts] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <div>
        {posts ? (
          posts.map((post) => {
            return (
              <div key={post.id}>
                <table>
                  <tr>
                  <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    
                  </tr>
                  <tr>
                    <td>{post.id}</td>
                    <td>{post.name}</td>
                    <td>{post.email}</td>
                    <td><button onClick={()=>deletid(post.id)}>Delete</button></td>
                  </tr>
                </table>
              </div>

            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
  // return (
  //   <div className="App">
  //     <table>
  //       <tr>
  //         <th>Name</th>
  //         <th>Username</th>
  //         <th>Email</th>
  //       </tr>
  //       {posts.map((val, key) => {
  //         return (
  //           <tr key={key}>
  //             <td>{val.name}</td>
  //             <td>{val.username}</td>
  //             <td>{val.email}</td>
  //           </tr>
  //         )
  //       })}
  //     </table>
  //   </div>
  // );
}
export default Data