var permissionNodes = [
    //VANILLA PERMS
    "modifyworld.*",

    //ESSENTIALS PERMS
    "essentials.afk.message","essentials.afk.others","essentials.antioch","essentials.back","essentials.back.ondeath","essentials.backup","essentials.balance","essentials.balance.others","essentials.balancetop","essentials.balancetop.force","essentials.ban","essentials.ban.exempt","essentials.ban.offline","essentials.banip","essentials.bigtree","essentials.book","essentials.book.author","essentials.book.others","essentials.book.title","essentials.break","essentials.break.bedrock","essentials.broadcast","essentials.broadcastworld","essentials.build","essentials.burn","essentials.chat.ignoreexempt","essentials.chat.spy","essentials.chat.spy.exempt","essentials.clearinventory","essentials.clearinventory.all","essentials.clearinventory.multiple","essentials.clearinventory.others","essentials.clearinventoryconfirmtoggle","essentials.commandcooldowns.bypass","essentials.compass","essentials.condense","essentials.createkit","essentials.customtext","essentials.delhome","essentials.delhome.others","essentials.deljail","essentials.delwarp","essentials.depth","essentials.disposal","essentials.eco","essentials.eco.loan","essentials.enchant","essentials.enchantments.allowunsafe","essentials.enderchest","essentials.enderchest.modify","essentials.enderchest.others","essentials.essentials","essentials.exp","essentials.exp.give","essentials.exp.give.others","essentials.exp.others","essentials.exp.set","essentials.exp.set.others","essentials.ext","essentials.feed","essentials.feed.cooldown.bypass","essentials.feed.others","essentials.fireball","essentials.firework","essentials.firework.fire","essentials.firework.multiple","essentials.fly","essentials.fly.safelogin","essentials.gamemode","essentials.gamemode.all","essentials.gamemode.others","essentials.gc","essentials.geoip.hide","essentials.geoip.show","essentials.getpos","essentials.getpos.others","essentials.give","essentials.god","essentials.god.pvp","essentials.hat","essentials.heal","essentials.heal.cooldown.bypass","essentials.heal.others","essentials.help","essentials.helpop","essentials.helpop.receive","essentials.home.compass","essentials.home.bed","essentials.home.others","essentials.ignore","essentials.info","essentials.invsee","essentials.invsee.equip","essentials.invsee.modify","essentials.invsee.preventmodify","essentials.item","essentials.itemdb","essentials.itemspawn.exempt","essentials.itemspawn.item-all","essentials.jail.exempt","essentials.jails","essentials.joinfullserver","essentials.jump","essentials.jump.lock","essentials.keepxp","essentials.kick","essentials.kick.exempt","essentials.kick.notify","essentials.kickall","essentials.kill","essentials.kill.exempt","essentials.kill.force","essentials.kit","essentials.kit.exemptdelay","essentials.kit.others","essentials.kittycannon","essentials.lightning","essentials.lightning.others","essentials.list","essentials.list.hidden","essentials.mail","essentials.mail.send","essentials.mail.sendall","essentials.me","essentials.more","essentials.motd","essentials.msg","essentials.msg.multiple","essentials.msgtoggle","essentials.mute","essentials.mute.exempt","essentials.mute.offline","essentials.near","essentials.near.maxexempt","essentials.near.others","essentials.nick","essentials.nick.changecolors","essentials.nick.changecolors.bypass","essentials.nick.others","essentials.nocommandcost.all","essentials.nuke","essentials.oversizedstacks","essentials.pay","essentials.pay.multiple","essentials.payconfirmtoggle","essentials.paytoggle","essentials.ping","essentials.potion.[potionName]","essentials.potion.apply","essentials.powertool","essentials.powertool.append","essentials.powertooltoggle","essentials.protect.alerts","essentials.protect.alerts.notrigger","essentials.protect.damage.disable","essentials.protect.entitytarget.bypass","essentials.protect.exemptbreak","essentials.protect.exemptplacement","essentials.protect.exemptusage","essentials.protect.pvp","essentials.ptime","essentials.ptime.others","essentials.pvpdelay.exempt","essentials.pweather","essentials.pweather.others","essentials.msg","essentials.realname","essentials.recipe","essentials.remove","essentials.repair","essentials.repair.all","essentials.repair.armor","essentials.repair.enchanted","essentials.rules","essentials.seen","essentials.seen.banreason","essentials.seen.ip","essentials.seen.ipsearch","essentials.seen.location","essentials.sell","essentials.sell.bulk","essentials.sell.hand","essentials.sethome","essentials.sethome.bed","essentials.sethome.multiple","essentials.sethome.multiple.unlimited","essentials.sethome.others","essentials.setjail","essentials.setspawn","essentials.setwarp","essentials.setworth","essentials.setxmpp","essentials.showkit","essentials.signs.enchant.allowunsafe","essentials.signs.protection.override","essentials.signs.trade.override","essentials.signs.trade.override.collect","essentials.silentjoin","essentials.silentjoin.vanish","essentials.silentquit","essentials.skull","essentials.skull.modify","essentials.skull.others","essentials.skull.spawn","essentials.sleepingignored","essentials.socialspy","essentials.spawn","essentials.spawn-on-join.exempt","essentials.spawn.others","essentials.spawner","essentials.spawnmob","essentials.spawnmob.stack","essentials.speed","essentials.speed.bypass","essentials.speed.fly","essentials.speed.others","essentials.speed.walk","essentials.sudo","essentials.sudo.exempt","essentials.sudo.multiple","essentials.suicide","essentials.teleport.cooldown.bypass.back","essentials.teleport.cooldown.bypass.tpa","essentials.teleport.timer.bypass","essentials.teleport.timer.move","essentials.tempban","essentials.tempban.exempt","essentials.tempban.offline","essentials.tempban.unlimited","essentials.thunder","essentials.time","essentials.time.set","essentials.time.world.all","essentials.togglejail","essentials.togglejail.offline","essentials.top","essentials.tp","essentials.tp.others","essentials.tp.position","essentials.tpa","essentials.tpaall","essentials.tpacancel","essentials.tpaccept","essentials.tpahere","essentials.tpall","essentials.tpdeny","essentials.tphere","essentials.tpo","essentials.tpohere","essentials.tppos","essentials.tptoggle","essentials.tree","essentials.unban","essentials.unbanip","essentials.unlimited","essentials.unlimited.item-all","essentials.unlimited.item-bucket","essentials.unlimited.others","essentials.vanish","essentials.vanish.pvp","essentials.vanish.see","essentials.version","essentials.warp","essentials.warp.list","essentials.warp.otherplayers","essentials.warp.others","essentials.weather","essentials.whois","essentials.workbench","essentials.world","essentials.worth","essentials.xmpp","essentials.xmppspy","essentials.fly.others","essentials.god.others","essentials.msgtoggle.others","essentials.socialspy.others","essentials.tptoggle.others","essentials.vanish.others","essentials.seen.extra","essentials.chat.color","essentials.chat.format","essentials.chat.magic","essentials.chat.question","essentials.chat.shout","essentials.chat.spy","essentials.chat.url","essentials.nocommandcost.[command]","essentials.protect","essentials.protect.admin","essentials.protect.damage.contact","essentials.protect.damage.creeper","essentials.protect.damage.drowning","essentials.protect.damage.fall","essentials.protect.damage.fire","essentials.protect.damage.fireball","essentials.protect.damage.lava","essentials.protect.damage.lightning","essentials.protect.damage.projectiles","essentials.protect.damage.suffocation","essentials.protect.damage.tnt","essentials.protect.ownerinfo","essentials.signs.break.balance","essentials.signs.break.buy","essentials.signs.break.disposal","essentials.signs.break.enchant","essentials.signs.break.free","essentials.signs.break.gamemode","essentials.signs.break.heal","essentials.signs.break.info","essentials.signs.break.kit","essentials.signs.break.mail","essentials.signs.break.protection","essentials.signs.break.repair","essentials.signs.break.sell","essentials.signs.break.spawnmob","essentials.signs.break.time","essentials.signs.break.trade","essentials.signs.break.warp","essentials.signs.break.weather","essentials.signs.color","essentials.signs.create.balance","essentials.signs.create.buy","essentials.signs.create.disposal","essentials.signs.create.enchant","essentials.signs.create.free","essentials.signs.create.gamemode","essentials.signs.create.heal","essentials.signs.create.info","essentials.signs.create.kit","essentials.signs.create.mail","essentials.signs.create.protection","essentials.signs.create.repair","essentials.signs.create.sell","essentials.signs.create.spawnmob","essentials.signs.create.time","essentials.signs.create.trade","essentials.signs.create.warp","essentials.signs.create.weather","essentials.signs.format","essentials.signs.magic","essentials.signs.use.balance","essentials.signs.use.buy","essentials.signs.use.disposal","essentials.signs.use.enchant","essentials.signs.use.free","essentials.signs.use.gamemode","essentials.signs.use.heal","essentials.signs.use.info","essentials.signs.use.kit","essentials.signs.use.mail","essentials.signs.use.protection","essentials.signs.use.repair","essentials.signs.use.sell","essentials.signs.use.spawnmob","essentials.signs.use.time","essentials.signs.use.trade","essentials.signs.use.warp","essentials.signs.use.weather","essentials.itemspawn.meta-chapter-[chapter]","essentials.afk.auto","essentials.afk.kickexempt","essentials.help.[pluginname]","essentials.help.[pluginname].[command]","essentials.kits.*","essentials.kits.[kitname]","essentials.sethome.multiple.[set name]","essentials.spawner.*","essentials.spawner.[mob]","essentials.spawnmob.*","essentials.spawnmob.[mob]","essentials.unlimited.item-[itemid]","essentials.unlimited.item-[itemname]","essentials.warp.overwrite.*","essentials.warp.overwrite.[warpname]","essentials.warps.*","essentials.warps.[warpname]","essentials.itemspawn.meta-chapter-[chapter]","essentials.ban.notify","essentials.ban.notify","essentials.ban.notify","essentials.ban.notify","essentials.ban.notify","essentials.enchantments.[enchantmentname]","essentials.enchantments.[enchantmentname]","essentials.enchantments.[enchantmentname]","essentials.enchantments.allowunsafe","essentials.enchantments.allowunsafe","essentials.enchantments.allowunsafe","essentials.itemspawn.item-[itemid]","essentials.itemspawn.item-[itemid]","essentials.itemspawn.item-[itemname]","essentials.itemspawn.item-all","essentials.itemspawn.item-all","essentials.itemspawn.meta-author","essentials.itemspawn.meta-author","essentials.itemspawn.meta-book","essentials.itemspawn.meta-book","essentials.itemspawn.meta-firework","essentials.itemspawn.meta-firework","essentials.itemspawn.meta-head","essentials.itemspawn.meta-head","essentials.itemspawn.meta-lore","essentials.itemspawn.meta-lore","essentials.itemspawn.meta-title","essentials.itemspawn.meta-title","essentials.oversizedstacks","essentials.oversizedstacks","essentials.oversizedstacks","essentials.vanish.effect","essentials.vanish.interact","essentials.whois.ip","essentials.kickall.exempt","essentials.gamemode.creative","essentials.gamemode.survival","essentials.gamemode.adventure","essentials.gamemode.spectator","essentials.nick.allowunsafe","essentials.msgtoggle.bypass","essentials.tpauto.others","essentials.nick.color","essentials.nick.magic","essentials.nick.format","essentials.keepinv","essentials.back.others","essentials.mute.notify","essentials.home","essentials.balancetop.exclude","essentials.delkit","essentials.jail.allow.<command>","essentials.worlds.<worldname>","essentials.worlds.<worldname>","essentials.worlds.<worldname>","essentials.worlds.<worldname>","essentials.worlds.<worldname>","essentials.worlds.<worldname>","essentials.worlds.<worldname>","essentials.worlds.<worldname>","essentials.worlds.<worldname>","essentials.worlds.<worldname>","essentials.worlds.<worldname>","essentials.itemspawn.item-<itemname>","essentials.back.into.<worldname>","essentials.hat.prevent-type.<item-name>","essentials.build.break.<id>[:datavalue]","essentials.build.craft.<id>[:datavalue]","essentials.build.drop.<id>[:datavalue]","essentials.build.interact.<id>[:datavalue]","essentials.build.pickup.<id>[:datavalue]","essentials.build.place.<id>[:datavalue]",

    //WORLDEDIT PERMS
    "worldedit.help","worldedit.reload","worldedit.report","worldedit.history.undo","worldedit.history.undo.self","worldedit.history.redo","worldedit.history.redo.self","worldedit.history.clear","worldedit.limit","worldedit.timeout","worldedit.fast","worldedit.reorder","worldedit.drawsel","worldedit.world","worldedit.global-mask","worldedit.searchitem","worldedit.navigation.unstuck","worldedit.navigation.ascend","worldedit.navigation.descend","worldedit.navigation.ceiling","worldedit.navigation.thru.command","worldedit.navigation.jumpto.command","worldedit.navigation.up","worldedit.selection.pos","worldedit.selection.pos","worldedit.selection.hpos","worldedit.selection.hpos","worldedit.selection.chunk","worldedit.wand","worldedit.wand.toggle","worldedit.selection.contract","worldedit.selection.shift","worldedit.selection.outset","worldedit.selection.inset","worldedit.selection.size","worldedit.analysis.count","worldedit.analysis.distr","worldedit.selection.expand","worldedit.region.set","worldedit.region.line","worldedit.region.curve","worldedit.region.replace","worldedit.region.overlay","worldedit.region.center","worldedit.region.naturalize","worldedit.region.walls","worldedit.region.faces","worldedit.region.smooth","worldedit.region.move","worldedit.region.stack","worldedit.regen","worldedit.region.deform","worldedit.region.hollow","worldedit.region.forest","worldedit.region.flora","worldedit.generation.cylinder","worldedit.generation.cylinder","worldedit.generation.sphere","worldedit.generation.sphere","worldedit.generation.forest","worldedit.generation.pumpkins","worldedit.generation.pyramid","worldedit.generation.pyramid","worldedit.generation.shape","worldedit.generation.shape.biome","worldedit.schematic.delete","worldedit.schematic.list","worldedit.clipboard.load","worldedit.schematic.save","worldedit.schematic.formats","worldedit.schematic.load","worldedit.clipboard.save","worldedit.schematic.delete","worldedit.schematic.formats","worldedit.schematic.list","worldedit.clipboard.load","worldedit.schematic.load","worldedit.clipboard.save","worldedit.schematic.save","worldedit.clipboard.copy","worldedit.clipboard.cut","worldedit.clipboard.paste","worldedit.clipboard.rotate","worldedit.clipboard.flip","worldedit.clipboard.clear","worldedit.setwand","worldedit.setwand","worldedit.tool.info","worldedit.tool.tree","worldedit.tool.replacer","worldedit.tool.data-cycler","worldedit.tool.flood-fill","worldedit.tool.deltree","worldedit.tool.farwand","worldedit.tool.lrbuild","worldedit.superpickaxe","worldedit.brush.options.mask","worldedit.brush.options.material","worldedit.brush.options.range","worldedit.brush.options.size","worldedit.brush.options.tracemask","worldedit.superpickaxe.area","worldedit.superpickaxe.recursive","worldedit.superpickaxe","worldedit.superpickaxe.area","worldedit.superpickaxe.recursive","worldedit.superpickaxe","worldedit.brush.ex","worldedit.brush.paint","worldedit.brush.clipboard","worldedit.brush.butcher","worldedit.brush.set","worldedit.brush.gravity","worldedit.brush.forest","worldedit.brush.lower","worldedit.brush.smooth","worldedit.brush.cylinder","worldedit.brush.apply","worldedit.brush.deform","worldedit.brush.sphere","worldedit.brush.raise","worldedit.brush.apply","worldedit.brush.item","worldedit.brush.butcher","worldedit.brush.clipboard","worldedit.brush.cylinder","worldedit.brush.deform","worldedit.brush.ex","worldedit.brush.forest","worldedit.brush.gravity","worldedit.brush.lower","worldedit.brush.paint","worldedit.brush.item","worldedit.brush.raise","worldedit.brush.set","worldedit.brush.smooth","worldedit.brush.sphere","worldedit.biome.list","worldedit.biome.info","worldedit.biome.set","worldedit.chunkinfo","worldedit.listchunks","worldedit.delchunks","worldedit.snapshots.restore","worldedit.snapshots.restore","worldedit.snapshots.list","worldedit.snapshots.restore","worldedit.snapshots.restore","worldedit.snapshots.list","worldedit.snapshots.restore","worldedit.snapshots.restore","worldedit.scripting.execute","worldedit.scripting.execute","worldedit.fill","worldedit.fill.recursive","worldedit.drain","worldedit.fixlava","worldedit.fixwater","worldedit.removeabove","worldedit.removebelow","worldedit.removenear","worldedit.replacenear","worldedit.snow","worldedit.thaw","worldedit.green","worldedit.extinguish","worldedit.butcher","worldedit.remove","worldedit.calc"
];

$(function() { autocomplete($('#pepAddPermission').get(0), permissionNodes); });

function autocomplete(inp, arr) {
	/*the autocomplete function takes two arguments,
	the text field element and an array of possible autocompleted values:*/
	var currentFocus;
	/*execute a function when someone writes in the text field:*/
	inp.addEventListener("input", function(e) {
		var a, b, i, val = this.value;
		/*close any already open lists of autocompleted values*/
		closeAllLists();
		if (!val) {
			return false;
		}
		currentFocus = -1;
		/*create a DIV element that will contain the items (values):*/
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		/*append the DIV element as a child of the autocomplete container:*/
		this.parentNode.appendChild(a);
		/*for each item in the array...*/
		for (i = 0; i < arr.length; i++) {
			/*check if the item starts with the same letters as the text field value:*/
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				/*create a DIV element for each matching element:*/
				b = document.createElement("DIV");
				/*make the matching letters bold:*/
				b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
				b.innerHTML += arr[i].substr(val.length);
				/*insert a input field that will hold the current array item's value:*/
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				/*execute a function when someone clicks on the item value (DIV element):*/
				b.addEventListener("click", function(e) {
					/*insert the value for the autocomplete text field:*/
					inp.value = this.getElementsByTagName("input")[0].value;
					/*close the list of autocompleted values,
					(or any other open lists of autocompleted values:*/
					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});
	/*execute a function presses a key on the keyboard:*/
	inp.addEventListener("keydown", function(e) {
		var x = document.getElementById(this.id + "autocomplete-list");
		if (x) x = x.getElementsByTagName("div");
		if (e.keyCode == 40) {
			/*If the arrow DOWN key is pressed,
			increase the currentFocus variable:*/
			currentFocus++;
			/*and and make the current item more visible:*/
			addActive(x);
		} else if (e.keyCode == 38) { //up
			/*If the arrow UP key is pressed,
			decrease the currentFocus variable:*/
			currentFocus--;
			/*and and make the current item more visible:*/
			addActive(x);
		} else if (e.keyCode == 13) {
			/*If the ENTER key is pressed, prevent the form from being submitted,*/
			e.preventDefault();
			if (currentFocus > -1) {
				/*and simulate a click on the "active" item:*/
				if (x) x[currentFocus].click();
			}
		}
	});

	function addActive(x) {
		/*a function to classify an item as "active":*/
		if (!x) return false;
		/*start by removing the "active" class on all items:*/
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = (x.length - 1);
		/*add class "autocomplete-active":*/
		x[currentFocus].classList.add("autocomplete-active");
        x[currentFocus].scrollIntoView();
	}

	function removeActive(x) {
		/*a function to remove the "active" class from all autocomplete items:*/
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
		}
	}

	function closeAllLists(elmnt) {
		/*close all autocomplete lists in the document,
		except the one passed as an argument:*/
		var x = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}
	/*execute a function when someone clicks in the document:*/
	document.addEventListener("click", function(e) {
		closeAllLists(e.target);
	});
}
