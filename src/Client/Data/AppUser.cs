using System;
using System.ComponentModel.DataAnnotations;
using CatchMe.Web.Shared;

namespace CatchMe.Web.Client.Data
{
    public class AppUser
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public string DisplayName { get; set; }
        public float Longitude { get; set; }
        public float Latitude { get; set; }
        [Required]
        public string PictureUrl { get; set; }
        public decimal Speed { get; set; }
        public decimal Altitude { get; set; }
        public decimal Heading { get; set; }
        [Required]
        public DateTime CreatedAt { get; set; }
        [Required]
        public DateTime ModifiedAt { get; set; }
    }
}
