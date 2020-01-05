using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CatchMe.Web.Client.Data;

namespace CatchMe.Web.Client
{
    public class UserService
    {
        public IReadOnlyList<Friend> Friends => new List<Friend> {new Friend{DisplayName = "test"}};

        public async Task InviteFriendAsync(string friendEmail, string subject, string message)
        {
            throw new NotImplementedException();
        }
    }
}
