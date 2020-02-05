using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CatchMe.Web.Client.Data;

namespace CatchMe.Web.Client.Services
{
    public class UserService
    {
        public IReadOnlyList<Friend> Friends => new List<Friend>(); //{new Friend{DisplayName = "test"}};

        public async Task InviteFriendAsync(string friendEmail, string subject, string message)
        {
            throw new NotImplementedException();
        }

        public async Task StartCurrentUserSession(string email)
        {
            Console.WriteLine("TODO Start current user session");
        }
    }
}
