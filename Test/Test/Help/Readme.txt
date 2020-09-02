For front end application : 

1) go to project location
2) open terminal
3) hit : cd ClientApp
4) hit : npm i
5) hit : ng Serve (make sure port is 4200) I have used proxy and hardcoaded in startup.cs

For back end application : 

1) Execute database scripts on your database.

2) Open project's .sln in Visual Studio
3) Change database url in your BE application
  i) SGTestContext.cs -> line no. 28
  ii) Startup.cs -> line no. 27

5) Run on IIS Express

8) Open https://localhost:44335/
