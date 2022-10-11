export const shortenAddress = (address) => {
    return address != false ? `${address.slice(0, 5)}...${address.slice(address.length - 4)}` : ''
};
