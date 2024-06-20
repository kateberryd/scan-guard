export const CONTRACT_ADDR ="0x53954be686dd89e05f2e2ce46c038aee9e053efbad79bf1f56ea85fb1d788ba";

export const formatAddress = (addr: string) => {
    return addr.replace(/^0x/, "0x0");
};



export const formatIpfsHash = (hash: string) => {
    return hash.replace(/,/g, ''); 
}

