using System;

namespace CatchMe.Web.Shared
{
    public class Friend
    {
        public Friend(string displayName, Position lastLocation, bool requestReceived, bool requestSent, decimal distance, string friendSessionId, bool friendSessionActive, string pictureUrl, decimal speed, decimal altitude, decimal heading, DateTime createdAt, DateTime modifiedAt, bool blocked, bool heBlockedMe)
        {
            DisplayName = displayName;
            LastLocation = lastLocation;
            RequestReceived = requestReceived;
            RequestSent = requestSent;
            Distance = distance;
            FriendSessionId = friendSessionId;
            FriendSessionActive = friendSessionActive;
            PictureUrl = pictureUrl;
            Speed = speed;
            Altitude = altitude;
            Heading = heading;
            CreatedAt = createdAt;
            ModifiedAt = modifiedAt;
            Blocked = blocked;
            HeBlockedMe = heBlockedMe;
        }

        public Friend()
        {
            
        }

        public string DisplayName { get; set; }
        public Position LastLocation { get; set; }
        public bool RequestReceived { get; set; }
        public bool RequestSent { get; set; }
        public decimal Distance { get; set; }
        public string FriendSessionId { get; set; }
        public bool FriendSessionActive { get; set; }
        public string PictureUrl { get; set; }
        public decimal Speed { get; set; }
        public decimal Altitude { get; set; }
        public decimal Heading { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ModifiedAt { get; set; }
        public bool Blocked { get; set; }
        public bool HeBlockedMe { get; set; }
    }
}
