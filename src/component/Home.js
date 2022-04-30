import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
      <div>
          메인 홈 페이지  
      </div>
      <div>
          <Link to="/detail">디테일 페이지 가기</Link>  
      </div>
        </>
    )
  }
export default Home;