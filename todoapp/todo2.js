$("ul").on("click","li",function()
{
	$(this).toggleClass("completed");
});
$("ul").on("click","span",function(event)
{
$(this).parent().fadeOut(1000,function()
	{
		$(this).remove();
	});
event.stopPropagation();
});
$("textarea").on("keypress",function(event)
{
	if(event.which===13)
	{
		var todoText=$(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'> </i></span>"+todoText+"</li>")
	}

})
function toggleslidebar() {
	document.getElementById("slidebar").classList.toggle('active');
}