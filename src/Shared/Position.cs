namespace CatchMe.Web.Shared
{
    public class Position
    {
        public Position(float longitude, float latitude)
        {
            Longitude = longitude;
            Latitude = latitude;
        }

        public Position()
        {
            
        }

        public float Longitude { get; set; }
        public float Latitude { get; set; }
    }
}
