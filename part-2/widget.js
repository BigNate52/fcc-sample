function getNews() {
    var jsonurl = "https://www.reddit.com/r/worldnews.json";
    var limit = 5;
    
    //get json from defined url
    var response = $.getJSON( jsonurl, function() {})
        .done(function() {
            var content = $.parseJSON(response.responseText);
            var articles = content.data.children;
            //console.log(response);
            //see what we've got for content
            //console.log(articles);
            
            //build the output as divs
            var dsp = "";
            
            for (var x=0;x<limit;x++) {
                var row = articles[x]['data'];
                var date = new Date(row['created']*1000);
                
                //dsp this row
                //console.log(row);
                
                //alternate background color
                var bgcolor = "even";
                if (x%2 == 0) bgcolor = "odd";
                
                dsp += "<a href=\"" + row['url'] + "\" target=\"_blank\" title=\"" + row['title'] + "\">";
                dsp += "<div class=\"" + bgcolor + "\">";
                dsp += "<b>" + row['title'] + "</b><br>";
                dsp += "By <b><em>" + row['author'] + "</em></b> from <em>" + row['domain'] + "</em><br />";
                dsp += "Posted in <em>" + row['subreddit_name_prefixed'] + "</em> on <em>" + date.toLocaleDateString("en-US") + "</em><br />"; 
                dsp += "</div>";
                dsp += "</a>";
            }
            
            $("#ads").html(dsp);
        });

}