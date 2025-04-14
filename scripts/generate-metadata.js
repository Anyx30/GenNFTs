const fs = require('fs');
const path = require('path');

const totalNFTs = 19;
const imagesCID = 'bafybeicmvgwofwf5rz2kpklrulhlxqntltmmilvlx6v46squr46nr2y5j4';
const outputFolder = './metadata';

if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

const baseAttributes = [
    { trait_type: "Collection", value: "METABORONG" },
    { trait_type: "Type", value: "GHIBLI_ART_NFT" }
];

for (let i = 1; i <= totalNFTs; i++) {
    const metadata = {
        name: `METABORONG #${i}`,
        description: "A unique digital artwork from the METABORONG collection",
        image: `https://ipfs.io/ipfs/${imagesCID}/${i}.jpg`,
        attributes: [
            ...baseAttributes,
            { trait_type: "Role", value: "Developer" }
        ]
    };

    const metadataPath = path.join(outputFolder, `${i}.json`);
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
    console.log(`Generated metadata for NFT #${i}`);
}

console.log('Metadata generation complete!');
