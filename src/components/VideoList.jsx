const videos=[
    {
        name:"first",
        duration:15,
        id:1,
    },
    {
        name:"sec",
        duration:8,
        id:2,
    },

    {
        name:"third",
        duration:6,
        id:3,
    }
]

export function VideoList()
{
    return(
        <>
      <h1>Video List</h1>  
      
      {
        videos.map((video)=>
        {
            return(
                <div key={video.key}>
                    <p>{video.name}</p>
                    <p>{video.duration}</p>
                </div>
            )
        })
      }
      </>
    );
}