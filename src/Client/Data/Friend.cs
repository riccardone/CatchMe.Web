using System;
using System.ComponentModel.DataAnnotations;
using CatchMe.Web.Shared;

namespace CatchMe.Web.Client.Data
{
    public class Friend
    {
        [Key]
        public long? Id { get; set; }
        [Required]
        public string DisplayName { get; set; }
        public float Longitude { get; set; }
        public float Latitude { get; set; }
        public bool RequestReceived { get; set; }
        public bool RequestSent { get; set; }
        public decimal Distance { get; set; }
        public string FriendSessionId { get; set; }
        [Required]
        public bool FriendSessionActive { get; set; }
        [Required]
        public string PictureUrl { get; set; }
        public decimal Speed { get; set; }
        public decimal Altitude { get; set; }
        public decimal Heading { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
        [Required]
        public DateTime ModifiedAt { get; set; }
        [Required]
        public bool Blocked { get; set; }
        [Required]
        public bool HeBlockedMe { get; set; }
    }
}
