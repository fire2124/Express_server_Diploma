## Express Api Notes

#### from first pic
http://localhost:9500/api/v1/currentMhdPoBusses/firstJSON/1 - done
http://localhost:9500/api/v1/currentSadPoBusses/firstJSON/1  - done
http://localhost:9500/api/v1/currentTrains/firstJSON/1  - done
http://localhost:9500/api/v1/currentTraffic/firstJSON/1  - done


#### from second pic - DONE
for each time select for all types - 8 times 
for each type - mhd, sad, train - 3X
for delay,change_of_delay - 2X

1."5-9",mhd, delay 
2."5-9",mhd, change_of_delay
3."5-9",sad, delay
4."5-9",sad, change_of_delay
5."5-9",train, delay
6."5-9",train, change_of_delay
7."5-9",traffic

1."14-18",mhd, delay
2."14-18",mhd, change_of_delay
3."14-18",sad, delay
4."14-18",sad, change_of_delay
5."14-18",train, delay
6."14-18",train, change_of_delay
7."14-18",traffic

1."15min",mhd, delay 
2."15min",mhd, change_of_delay
3."15min",sad, delay
4."15min",sad, change_of_delay
5."15min",train, delay
6."15min",train, change_of_delay
7."15min",traffic

1."1hour",mhd, delay
2."1hour",mhd, change_of_delay
3."1hour",sad, delay
4."1hour",sad, change_of_delay
5."1hour",train, delay
6."1hour",train, change_of_delay
7."1hour",traffic

1."3hour",mhd, delay
2."3hour",mhd, change_of_delay
3."3hour",sad, delay
4."3hour",sad, change_of_delay
5."3hour",train, delay
6."3hour",train, change_of_delay
7."3hour",traffic

1."1day",mhd, delay
2."1day",mhd, change_of_delay
3."1day",sad, delay
4."1day",sad, change_of_delay
5."1day",train, delay
6."1day",train, change_of_delay
7."1day",traffic

1."1week",mhd, delay
2."1week",mhd, change_of_delay
3."1week",sad, delay
4."1week",sad, change_of_delay
5."1week",train, delay
6."1week",train, change_of_delay
7."1week",traffic

1."1month",mhd, delay
2."1month",mhd, change_of_delay
3."1month",sad, delay
4."1month",sad, change_of_delay
5."1month",train, delay
6."1month",train, change_of_delay
7."1month",traffic


#### Mhd 
Delay - mhd  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
      - sad  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
      - train - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
    - 24 express get
    

Change of Delay - mhd  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
                - sad  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
                - train - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
    - 24 express get
- 48 express get
#### Sad 
Delay - mhd  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
      - sad  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
      - train - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
    - 24 express get

Change of Delay - mhd  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
                - sad  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
                - train - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
    - 24 express get
- 48 express get
#### Train 
Delay - mhd  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
      - sad  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
      - train - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
    - 24 express get

Change of Delay - mhd  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
                - sad  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
                - train - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get
    - 24 express get
- 48 express get

### 144 express get

#### from third pic
traffic  - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 8 express get

#### from fourth pic - DONE
TimeByCurrentBus - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 1 express get due to select
TimeByCurrentStop - ["5-9","14-18","15min","1hour","3hour","1day","1week,"1month"] - 1 express get due to select

#### from fifth pic 
select for mhd, sad, train -isOnStop = true for predictions by one day