var colors=["red","blue","green","yellow"],gamePattern=[],userSelectedPattern=[],gameLevel=[],gameState=!1;function playSound(e){new Audio("sounds/"+e+".mp3").play()}function animative_btn(e){$("#"+e).addClass("pressed"),setTimeout(function(){$("#"+e).removeClass("pressed")},225)}function nextlevel(){var e=colors[Math.floor(4*Math.random())];gamePattern.push(e),gameLevel++,$("h1").text("Level "+gameLevel),playSound(e),animative_btn(e)}$(document).keypress(function(){!1===gameState&&(gameState=!0),nextlevel()}),$(".btn").click(function(){var e=$(this).attr("id");userSelectedPattern.push(e),playSound(e),animative_btn(e);var t=userSelectedPattern.length-1;userSelectedPattern[t]===gamePattern[t]?userSelectedPattern.length===gamePattern.length&&(userSelectedPattern=[],setTimeout(function(){nextlevel()},1e3)):($("h1").text("Game Over, press anykey to Restart"),$("body").addClass("error"),setTimeout(function(){$("body").removeClass("error")},500),playSound("wrong"),gameLevel=0,gameState=!1,gamePattern=[],userSelectedPattern=[])});