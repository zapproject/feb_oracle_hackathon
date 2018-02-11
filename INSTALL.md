# install all local  dependencies
```
npm install .
```

# install test environment (testing node) 
```
npm install -g ganache-cli@beta
```

# install truffle for deploying contracts locally
```
npm install -g truffle
```

# compile contract in contracts folder
```
truffle compile
truffle migrate
```

# run local test node
```
testrpc --acount=”<team private key>, 100000000000000000000”
```

# run oracle daemon script
```
node oracle_dameon.js
```
