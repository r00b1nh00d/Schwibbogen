# Schwibbogen aus der Zukunft
## ~avatar avatar @unplugged
In der Botschaft vom Nordpol hat der Weihnachtsmann um deine Hilfe gebeten. Doch bevor du dich auf den Weg machst, solltest du sicherstellen, dass du auch wieder zurück nach Hause findest. <br>
Schon früh nutzte man im Erzgebirge Schwibbögen. Mit diesen individuell verzierten Lichterbögen an den Fenstern war es den Arbeitern im Bergwerk auch nach einem langen Arbeitstag, wenn es schon dunkel war, möglich, zuverlässig dank der Beleuchtung ihr Zuhause zu finden. <br>
![SchwibbogenRot](https://github.com/r00b1nh00d/futurschwibbogen/blob/master/SchwibbogenRot.jpg?raw=true)

## ~ @unplugged 
So ein Schwibbogen wird klassisch aus Holz gefertigt. Natürlich kannst du aber auch erstmal einen Prototyp aus Pappe herstellen. Um besonders große Kreise auf die Pappe oder das Holz zu zeichnen, kannst du einen Stift an eine Schnur binden. Das eine Ender der Schnur hältst du mit der Hand fest (vielleicht kann dir hier jemand helfen, um den Mittelpunkt fest an einer Stelle zu halten). Dieses Ende ergibt den Kreismittelpunkt. Mit dem Stift kannst du jetzt einen großen Kreisbogen zeichnen (für einen kleinen Schwibbogen kann auch ein großer Topfdeckel als Schablone dienen). Du benötigst zwei etwas breitere Bögen, welche später von außen zu sehen sind. Der Innere sollte etwas schmaler sein, sodass die LED's später hinter den Äußeren versteckt sind. Die Dicke des inneren Bogens sollte ca. 1cm betragen, was der Breite des LED-Streifens entspricht.

## ~ @unplugged
Sobald alle Teile ausgesägt bzw. zurecht geschnitten sind, klebst du zuerst den LED-Streifen auf die Unterseite des inneren Bogens. Anschließend kannst du die äußeren Bögen bündig ankleben. Damit dein Holzleim oder Alleskleber seine Wirkung entfalten kann, lass ihn am besten über Nacht oder mindestens ein paar Stunden austrocknen (am besten du beschwerst den Bogen, damit die einzelnen Teile aufeinander gedrückt werden).

##  ~ @unplugged 
**Programmierung**
Bei der Programmierung stehen dir nun alle Türen offen.<br>
Wenn du dich an die Alarmanlage für die Keksdose erinnerst, könntest du Teile des Programms nutzen, um deinen Schwibbogen automatisch anzuschalten, sobald es draußen dunkel wird. <br>
Du kannst ihn auch wie das Party-Licht in Abhängigkeit zur Musik flackern lassen oder dir eine eigene Animation programmieren.  Diese könnte später so aussehen, als würden Sternschnuppen am Bogen entlang huschen. <br>
![Schwibbogen](https://github.com/r00b1nh00d/futurschwibbogen/blob/master/Schwibbogen.jpg?raw=true)

## Beispiel
Falls du erstmal testen möchtest, ob deine Konstruktion funktioniert, bevor du selbst programmierst, kannst du dieses Beispiel nachprogrammieren und testen. Bei diesem Beispiel sollten nach und nach die LED's angeschalten werden und am Ende wieder ausgeschaltet werden. 
```blocks
let strip = neopixel.create(DigitalPin.P1, 36, NeoPixelMode.RGB)
basic.forever(function () {
    for (let Index = 0; Index <= 36; Index++) {
        strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(Index + 1, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(Index + 2, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(Index + 3, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(Index + 4, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(100)
    }
    for (let Index = 0; Index <= 36; Index++) {
        strip.setPixelColor(36 - Index, neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(36 - (Index + 1), neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(36 - (Index + 2), neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(36 - (Index + 3), neopixel.colors(NeoPixelColors.Black))
        strip.setPixelColor(36 - (Index + 4), neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(100)
    }
})
```


> Diese Seite bei [https://r00b1nh00d.github.io/schwibbogen/](https://r00b1nh00d.github.io/schwibbogen/) öffnen

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/r00b1nh00d/schwibbogen** suchen und importieren

## Dieses Projekt bearbeiten ![Build Status Abzeichen](https://github.com/r00b1nh00d/schwibbogen/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/r00b1nh00d/schwibbogen** ein und klicke auf Importieren

## Blockvorschau

Dieses Bild zeigt den Blockcode vom letzten Commit im Master an.
Die Aktualisierung dieses Bildes kann einige Minuten dauern.

![Eine gerenderte Ansicht der Blöcke](https://github.com/r00b1nh00d/schwibbogen/raw/master/.github/makecode/blocks.png)

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
