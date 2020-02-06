using System.Threading.Tasks;
using CatchMe.Web.Server.Protos;
using Grpc.Core;

namespace CatchMe.Web.Server.Services
{
    public class CurrentUserService : CurrentUser.CurrentUserBase
    {
        private readonly StartCurrentUserSessionReply _fakeResponse = new StartCurrentUserSessionReply();
        public override Task<StartCurrentUserSessionReply> StartCurrentUserSession(StartCurrentUserSessionRequest request, ServerCallContext context)
        {
            return Task.FromResult(_fakeResponse); // base.StartCurrentUserSession(request, context);
        }
    }
}
