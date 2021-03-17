module.exports = {
    "moduleNameMapper": {
        "\\.(s?css|less)$": "identity-obj-proxy"
    },
    "setupFilesAfterEnv": ['./jest.setup.ts'],
    "snapshotSerializers": [require.resolve('enzyme-to-json/serializer')],
}