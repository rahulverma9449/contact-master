import "./SignUpIn.css";
function Map() {
  return (
    <div>
      <iframe
        width="520"
        height="400"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Gurgaon%20Gurgaon+(RAV%20Software%20Tech%20Pvt.%20Ltd.)&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>{" "}
      <a href="https://www.acadoo.de/"></a>{" "}
      <script
        type="text/javascript"
        src="https://embedmaps.com/google-maps-authorization/script.js?id=d9ad583e97910e7ec7f66e82601b774fe4d17e6f"
      ></script>
    </div>
  );
}
export default Map;
