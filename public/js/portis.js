import Portis from "@portis/web3";
import Web3 from "web3";

export const portis = new Portis("9171e863-14d2-44c4-b993-15828600dd3b", "FarmTract");
export const web3 = new Web3(portis.provider);

web3.eth
  .getAccounts()
  .then((accounts) => console.log(accounts))
  .catch((error) => console.log(error));

