import os;
flag = False;
template_proj = [
	"lib"+os.sep, [],
	"lib"+os.sep+"code.jquery.com"+os.sep, ["jquery-3.4.1.js"],
	"lib"+os.sep+"p5"+os.sep, ["p5.js"],
	"lib"+os.sep+"p5"+os.sep+"addons"+os.sep, ["p5.dom.js", "p5.sound.js"],
	"lib"+os.sep+"p5"+os.sep+"speech"+os.sep, ["p5.speech.js"],
	"resources"+os.sep, [],
	"sketch"+os.sep, ["sketch.js"]
];
lis = [
	[
		["index.html"],
		["index.html", "index.html", "index.html", "index.html"],
		["index.html", "index.html"],
		["index.html", "index.html"]
	],
	[
		["index.html"],
		["index.html"],
		["index.html", "index.html", "index.html", "index.html"],
		["index.html", "index.html", "index.html"],
		["index.html", "index.html", "index.html", "index.html", "index.html"],
		["index.html", "index.html"],
		["index.html"],
		["index.html"]
	],
];
st = """<doctype html>
<html>
	<head>
		<title>
			PenguinL
		</title>
		<script src="../lib/code.jquery.com/jquery-3.4.1.js"></script>
		<script src="../lib/p5/p5.js"></script>
		<script src="../lib/p5/addons/p5.dom.js"></script>
		<script src="../lib/p5/addons/p5.sound.js"></script>
		<script src="../lib/p5/speech/p5.speech.js"></script>
		<script type="text/javascript" src="../sketch/sketch.js"></script>
	</head>
	<body>

	</body>
</html>""";
while(True):
	ch = int(input("1. Создать корень сайта\n2. Стереть корень сайта\n0. Выход\n"));
	flag = True if (ch == 1) else (False if (ch == 2) else "GoodBye!!");
	if(flag == True):
		for i in range(len(lis)):
			for j in range (len(lis[i])):
				for k in range (len(lis[i][j])):
					os.makedirs("theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep+str(k+1)+os.sep+"theme"+os.sep);
					for n in range(0, len(template_proj), 2):
						os.makedirs("theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep+str(k+1)+os.sep+template_proj[n]);
						for m in range(len(template_proj[n+1])):
							tmp_file = [];
							tmp_file.append(open(
								"template"+os.sep+template_proj[n]+template_proj[n+1][m],
								"r+"
							));
							tmp_file.append(open(
								"theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep+str(k+1)+os.sep+template_proj[n]+template_proj[n+1][m],
								"w+"
							));
							for el in tmp_file[0]:
								tmp_file[1].write(el);
							for el in tmp_file:
								el.close();
					tmp_file = open("theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep+str(k+1)+os.sep+"theme"+os.sep+lis[i][j][k], "w+");
					tmp_file.write(st);
					tmp_file.close();
	elif(flag == "GoodBye!!"):
		break;
	else:
		for i in range(len(lis)):
			for j in range (len(lis[i])):
				for k in range (len(lis[i][j])):
					
					for n in range(len(template_proj)-2, -1, -2):
						for m in range(len(template_proj[n+1])):
							if(os.path.exists("theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep+str(k+1)+os.sep+template_proj[n]+template_proj[n+1][m])):
								os.remove("theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep+str(k+1)+os.sep+template_proj[n]+template_proj[n+1][m]);
						os.rmdir("theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep+str(k+1)+os.sep+template_proj[n]);
					
					if(os.path.exists("theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep+str(k+1)+os.sep+"theme"+os.sep+lis[i][j][k])):
						os.remove("theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep+str(k+1)+os.sep+"theme"+os.sep+lis[i][j][k]);
					os.rmdir("theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep+str(k+1)+os.sep+"theme"+os.sep);
					os.rmdir("theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep+str(k+1)+os.sep);
				os.rmdir("theme"+os.sep+str(i+1)+os.sep+str(j+1)+os.sep);
			os.rmdir("theme"+os.sep+str(i+1)+os.sep);
		os.rmdir("theme"+os.sep);
