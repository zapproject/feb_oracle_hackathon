contract EventEmitter{
    
    event Query(string queryString, address oracleAddress);

    string public testString = "initial value";

    function EventEmitter(){
        
    }

    function fireTestEvent(){
        Query('BINANCE-BTC-ETH', 0xB6175d90EC8aEb7419cbE4359C1d2c0157849547);
    }
    
    function fireEvent(string queryString, address oracleAddress){
        Query(queryString, oracleAddress);
    }
    
    function callBack(string response){
        testString = response;    
    }
    
    function getString() returns(string _testString){
        return testString;
    }
}

    
