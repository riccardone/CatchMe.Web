using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CatchMe.Web.Shared;

namespace CatchMe.Web.Client
{
    public class UserService
    {
        private readonly List<Friend> _friends = new List<Friend>();
        public IReadOnlyList<Friend> Friends => _friends;

        public UserService()
        {
            
        }

        public async Task InviteFriendAsync(string friendEmail, string subject, string message)
        {
            throw new NotImplementedException();
        }
    }
}
