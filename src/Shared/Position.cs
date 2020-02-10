namespace CatchMe.Web.Shared
{
    public class Position
    {
        public Position(double longitude, double latitude, double accuracy)
        {
            Longitude = longitude;
            Latitude = latitude;
            Accuracy = accuracy;
        }

        public Position()
        {
            
        }

        public double Longitude { get; }
        public double Latitude { get; }
        /// <summary>
        /// More or less accuracy in meters
        /// </summary>
        public double Accuracy { get; }
    }
}
