import { useState, useEffect } from 'react'
import BigNumber from "bignumber.js";
import { ethers } from 'ethers'
import Web3 from 'web3'
import Web3Modal from "web3modal";
import DragonNFTCont from "../ABI/NFTContract.json"

const netchainId = 4002;
const netchainIdHex = '0xFA2';
const DragonNFTAddr = "0xbd80A70cd670144EB327132fad82D511409FD8e2";
const price = [100, 150, 200, 250, 300]
// const netchainId = 250;
// const netchainIdHex = '0xFA';
// const DragonNFTAddr = "0xc0212406d1513C3a6CD445E1A34aC9886C973bD9";
let myAddr = "";
function Mint() {
  const [mintNum, setMintNum] = useState(0)
  const [currentPrice, setCurrentPrice] = useState(0)
  const [totalSupply, setTotalSupply] = useState()
  const array = [
    {title:'img1', url:'./assets/image/1.png'},
    {title:'img2', url:'./assets/image/2.png'},
    {title:'img3', url:'./assets/image/3.png'},
    {title:'img1', url:'./assets/image/1.png'},
    {title:'img2', url:'./assets/image/2.png'},
    {title:'img3', url:'./assets/image/3.png'},
  ];
  useEffect(async () => {
    const web3 = new Web3(Web3.givenProvider);
    let NFTContract;
    try {
      const chainId = await web3.eth.getChainId()
      if (chainId === netchainId) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        myAddr = signer.provider.provider.selectedAddress;
        setInterval(() => {
          getInformation()
        }, 10000);
      } else {
        try {
          await web3.currentProvider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: netchainIdHex }]
          });
        } catch (error) {
          if (error.code === 4902) {
            try {
              await web3.currentProvider.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: netchainIdHex,
                    chainName: "Fantom Opera",
                    rpcUrls: ["https://rpcapi.fantom.network/"],
                    blockExplorerUrls: ["https://ftmscan.com/"],
                  },
                ],
              });
            } catch (error) {
              alert(error.message);
            }
          }
        }
      }
    } catch (err) {
      console.log(err)
    }

  }, [])
  const getInformation = async () => {
    console.log('clickedddd')
    const web3 = new Web3(Web3.givenProvider);
    let NFTContract;
    try {
      const chainId = await web3.eth.getChainId()
      if (chainId === netchainId) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        myAddr = signer.provider.provider.selectedAddress;
        console.log(myAddr)
        NFTContract = new ethers.Contract(
          DragonNFTAddr,
          DragonNFTCont,
          provider
        )
        const currentCost = await NFTContract.getCurrentPrice();
        setCurrentPrice(new BigNumber(web3.utils.fromWei(`${currentCost}`, 'ether')))
        const total = await NFTContract.totalSupply()
        setTotalSupply(total)
      }
    } catch (err) {
      console.log(err)
    }
  }
  const onClickMint = async () => {
    console.log('clicked')
    const web3 = new Web3(Web3.givenProvider);
    let NFTContract;
    try {
      const chainId = await web3.eth.getChainId()
      if (chainId === netchainId) {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        myAddr = signer.provider.provider.selectedAddress;
        console.log(myAddr)
        NFTContract = new ethers.Contract(
          DragonNFTAddr,
          DragonNFTCont,
          signer
        )
        if (mintNum > 0) {
          const NFTCont = await NFTContract.mint(mintNum);
          await NFTCont.wait();
        }

      }
    } catch (err) {
      console.log(err)
    }
  }

  const ViewImg = (props) => {
    return (
      <div className="card-body">
          <div className="row d-flex justify-content-center">
            {props.items.map((item, key) => (
              <div key={key} className="col-md-6 col-lg-4 col-xl-3 p-1 col-12">
                  <img src={item.url} alt={item.title} className="viewimg rounded" />
              </div>
            ))}
          </div>
      </div>
    );
  }

  return (
    <>
      <section id="feathers" className="feathers">
        <div className="container">
          <div className="section-title" data-aos="zoom-out">
            <p>-  MINT -</p>
          </div>
          <div className="row">
            <div className="col-lg-6 order-1 d-flex justify-content-center order-lg-1 mt-3 mt-lg-0">
              <img src="assets/img/change.gif" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 order-2 rder-lg-2 p-5">
              <div id="clockdiv">
                <div>
                  <span className="days"></span>
                  <div className="smalltext">Days</div>
                </div>
                <div>
                  <span className="hours"></span>
                  <div className="smalltext">Hours</div>
                </div>
                <div>
                  <span className="minutes"></span>
                  <div className="smalltext">Minutes</div>
                </div>
                <div>
                  <span className="seconds"></span>
                  <div className="smalltext">Seconds</div>
                </div>
              </div>

              <div className="row pt-5 text-white rounded d-flex justify-content-center">
                <div className="col-5">
                  <label className="label_txt">Mint number</label>
                </div>
                <div className="col-7">
                  <input type='number' id="mint_num" disabled
                    onChange={(e) => {
                      if (e.target.value < 0) e.target.value = 0
                      else if (e.target.value > 20) e.target.value = 20
                      setMintNum(e.target.value)
                    }} />
                </div>
              </div>

              <div className="row">
                <h1 className="mt-4 pt-4">Total price is <span className="total-price number">{currentPrice * mintNum}</span>&nbsp;FTM</h1>
              </div>

              <div className="row justify-content-around d-flex">
                <input type="button" className="btn col-md-4 col-12 m-2 btn-success label_txt" value="Mint" disabled id="mint_btn" onClick={() => onClickMint()} />
                <input type="button" className="btn col-md-4 col-12 m-2 btn-success label_txt" data-bs-toggle="collapse" href="#collapseTwo" value="View" disabled id="view_btn" />
                {/* <input type="button" className="btn col-md-4 col-12 m-2 btn-success label_txt" value="Mint" id="mint_btn" />
                    <input type="button" className="btn col-md-4 col-12 m-2 btn-success label_txt" value="View" id="view_btn" /> */}
              </div>

            </div>
          </div>
          <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
            <ViewImg items={array}></ViewImg>
          </div>
        </div>
      </section>
    </>
  )

}

export default Mint  