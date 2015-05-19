/*---------- Install ----------------*/
bcr_disqus('Your Username',10,'Your API Key');
/*-----------------------------------*/

function bcr_disqus(username,count,apikey) {
    $.ajax({
        url: 'https://disqus.com/api/3.0/forums/listPosts.json?forum=' + username + '&limit=' + count + '&related=thread&api_key=' + apikey,
        crossDomain: true,
        dataType: 'json'
    }).done(function (data) {
        var html = '';
        html += '<ul id="komentar">';
        $.each(data.response, function(i, item) {       
            html += '<li>';
            html += '<div class="avatar-container">';
            html += '<a href="' + data.response[i].author.profileUrl + '" target="_blank">';
            html += '<img src="' + data.response[i].author.avatar.small.permalink + '" class="avatar" alt="avatar" />';
            html += '</a>';
            html += '</div>';
            html += '<div class="post-container">';
            html += '<a href=' + data.response[i].author.profileUrl + '" class="profile" target="_blank">';
            html += '<span class="profile">' + data.response[i].author.name;
            html += '</a>';              
            html += '<span class="buled" aria-hidden="true">•</span>';
            html += '<span class="date">' + data.response[i].createdAt + '</span>';
            html += '<p>' + data.response[i].raw_message + '</p>';
            html += '<span class="posted">posted on <a href="' + data.response[i].thread.link + '" target="_blank">' + data.response[i].thread.title + '</a></span>';
            html += '</div>';
            html += '</li>';        
        });
        html += '</ul>';
        $('#mydisqus').html(html);
    });
}
