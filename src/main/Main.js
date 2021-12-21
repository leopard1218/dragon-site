import Hero from './components/Hero';  
import Header from './components/Header'  
import Footer from './components/Footer'  
import Mint from './components/Mint'  
import Price from './components/Price'  
import Roadmap from './components/Roadmap'  
import Team from './components/Team'  
 
 function Main() {

  return ( 
		<>
            <Header></Header>
            <Hero></Hero>
            <main id="main">
               <Price></Price>
               <Mint></Mint>
                <Roadmap></Roadmap>
                <Team></Team>
            </main>
            <Footer></Footer>
        </>
	  )  
      
}  
  
export default Main  