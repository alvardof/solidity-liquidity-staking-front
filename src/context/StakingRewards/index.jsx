import { createContext, useEffect, useContext, useState } from "react";
import stakingRewardsInfo from "../../contracts/StakingRewards.json";
import { ethers } from "ethers";
import WalletContext from "../Wallet";

const StakeRewardsContext = createContext();

export function StakingRewardsProvider({ children }) {
    const address = stakingRewardsInfo.address;
    const abi = stakingRewardsInfo.abi;
    const { signer } = useContext(WalletContext);
    const [stakingReward, setStakingReward] = useState(null);

    return (
        <StakeManagerContext.Provider value={{ address, abi, stakingManager }}>
          {children}
        </StakeManagerContext.Provider>
      );
}