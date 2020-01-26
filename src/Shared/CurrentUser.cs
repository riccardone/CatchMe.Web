using System;

namespace CatchMe.Web.Shared
{
    public class CurrentUser
    {
        public CurrentUser(string displayName, Position lastLocation, string pictureUrl, decimal speed,
            decimal altitude, decimal heading, DateTime createdAt, DateTime modifiedAt)
        {
            DisplayName = displayName;
            LastLocation = lastLocation;
            PictureUrl = pictureUrl;
            Speed = speed;
            Altitude = altitude;
            Heading = heading;
            CreatedAt = createdAt;
            ModifiedAt = modifiedAt;
        }

        public CurrentUser()
        {
            
        }

        public string DisplayName { get; set; }
        public Position LastLocation { get; set; }
        public string PictureUrl { get; set; }
        public decimal Speed { get; set; }
        public decimal Altitude { get; set; }
        public decimal Heading { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime ModifiedAt { get; set; }
    }
}
