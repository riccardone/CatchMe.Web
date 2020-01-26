#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM dotnet/core/aspnet AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM dotnet/core/aspnet AS build
WORKDIR /src
COPY ["Server/CatchMe.Web.Server.csproj", "Server/"]
COPY ["Shared/CatchMe.Web.Shared.csproj", "Shared/"]
COPY ["Client/CatchMe.Web.Client.csproj", "Client/"]
RUN dotnet restore "Server/CatchMe.Web.Server.csproj"
COPY . .
WORKDIR "/src/Server"
RUN dotnet build "CatchMe.Web.Server.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CatchMe.Web.Server.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CatchMe.Web.Server.dll"]