import info from './info.json'

$('#logo').attr('src',info.logo)
$('#title').text(info.title)

$('#img').attr('src',info.image)
$('.card-title').text(info.city)
$('.card-text').text(info.description)

function append_video(){
    var video = "<video id='video' controls='controls' src="+info.video+"/>"
    var banner = "<div class='alert alert-primary' role='alert'>Check Out the Video!</div>"
    $(banner).appendTo('#video_box')
    $(video).appendTo('#video_box')
}
append_video()





