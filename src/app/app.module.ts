import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngryComponent } from './category/angry/angry.component';
import { BadMoodComponent } from './category/bad-mood/bad-mood.component';
import { BearComponent } from './category/bear/bear.component';
import { BegComponent } from './category/beg/beg.component';
import { BlushComponent } from './category/blush/blush.component';
import { CatComponent } from './category/cat/cat.component';
import { ConfusedComponent } from './category/confused/confused.component';
import { CryComponent } from './category/cry/cry.component';
import { CuteComponent } from './category/cute/cute.component';
import { DanceComponent } from './category/dance/dance.component';
import { DepressedComponent } from './category/depressed/depressed.component';
import { DevilComponent } from './category/devil/devil.component';
import { DisappointedComponent } from './category/disappointed/disappointed.component';
import { DroolComponent } from './category/drool/drool.component';
import { EatComponent } from './category/eat/eat.component';
import { EvilComponent } from './category/evil/evil.component';
import { ExcitedComponent } from './category/excited/excited.component';
import { FallDownComponent } from './category/fall-down/fall-down.component';
import { FecesComponent } from './category/feces/feces.component';
import { FeminineComponent } from './category/feminine/feminine.component';
import { FlipTableComponent } from './category/flip-table/flip-table.component';
import { FlowerComponent } from './category/flower/flower.component';
import { FunnyComponent } from './category/funny/funny.component';
import { GlassesComponent } from './category/glasses/glasses.component';
import { GrinComponent } from './category/grin/grin.component';
import { GrossComponent } from './category/gross/gross.component';
import { HappyComponent } from './category/happy/happy.component';
import { HeartComponent } from './category/heart/heart.component';
import { HelloComponent } from './category/hello/hello.component';
import { HelplessComponent } from './category/helpless/helpless.component';
import { HideComponent } from './category/hide/hide.component';
import { HugComponent } from './category/hug/hug.component';
import { KissComponent } from './category/kiss/kiss.component';
import { LaughComponent } from './category/laugh/laugh.component';
import { LennyFaceComponent } from './category/lenny-face/lenny-face.component';
import { LoveComponent } from './category/love/love.component';
import { MakeUpMyMindComponent } from './category/make-up-my-mind/make-up-my-mind.component';
import { MiddleFingerComponent } from './category/middle-finger/middle-finger.component';
import { MonkeyComponent } from './category/monkey/monkey.component';
import { MusicComponent } from './category/music/music.component';
import { NervousComponent } from './category/nervous/nervous.component';
import { PeaceSignComponent } from './category/peace-sign/peace-sign.component';
import { ProudComponent } from './category/proud/proud.component';
import { PunchComponent } from './category/punch/punch.component';
import { RabbitComponent } from './category/rabbit/rabbit.component';
import { RogerThatComponent } from './category/roger-that/roger-that.component';
import { RollOverComponent } from './category/roll-over/roll-over.component';
import { RunComponent } from './category/run/run.component';
import { SadComponent } from './category/sad/sad.component';
import { SaluteComponent } from './category/salute/salute.component';
import { ScaredComponent } from './category/scared/scared.component';
import { SheepComponent } from './category/sheep/sheep.component';
import { ShockedComponent } from './category/shocked/shocked.component';
import { ShrugComponent } from './category/shrug/shrug.component';
import { ShyComponent } from './category/shy/shy.component';
import { SleepComponent } from './category/sleep/sleep.component';
import { SmileComponent } from './category/smile/smile.component';
import { SparkleComponent } from './category/sparkle/sparkle.component';
import { SpinComponent } from './category/spin/spin.component';
import { SurprisedComponent } from './category/surprised/surprised.component';
import { SweatComponent } from './category/sweat/sweat.component';
import { TakeABowComponent } from './category/take-a-bow/take-a-bow.component';
import { ThatsItComponent } from './category/thats-it/thats-it.component';
import { ThumbsUpComponent } from './category/thumbs-up/thumbs-up.component';
import { TrembleComponent } from './category/tremble/tremble.component';
import { TryMyBestComponent } from './category/try-my-best/try-my-best.component';
import { UnicodeComponent } from './category/unicode/unicode.component';
import { UpsetComponent } from './category/upset/upset.component';
import { VomitComponent } from './category/vomit/vomit.component';
import { WeirdComponent } from './category/weird/weird.component';
import { WinkComponent } from './category/wink/wink.component';

@NgModule({
  declarations: [
    AppComponent,
    AngryComponent,
    BadMoodComponent,
    BearComponent,
    BegComponent,
    BlushComponent,
    CatComponent,
    ConfusedComponent,
    CryComponent,
    CuteComponent,
    DanceComponent,
    DepressedComponent,
    DevilComponent,
    DisappointedComponent,
    DroolComponent,
    EatComponent,
    EvilComponent,
    ExcitedComponent,
    FallDownComponent,
    FecesComponent,
    FeminineComponent,
    FlipTableComponent,
    FlowerComponent,
    FunnyComponent,
    GlassesComponent,
    GrinComponent,
    GrossComponent,
    HappyComponent,
    HeartComponent,
    HelloComponent,
    HelplessComponent,
    HideComponent,
    HugComponent,
    KissComponent,
    LaughComponent,
    LennyFaceComponent,
    LoveComponent,
    MakeUpMyMindComponent,
    MiddleFingerComponent,
    MonkeyComponent,
    MusicComponent,
    NervousComponent,
    PeaceSignComponent,
    ProudComponent,
    PunchComponent,
    RabbitComponent,
    RogerThatComponent,
    RollOverComponent,
    RunComponent,
    SadComponent,
    SaluteComponent,
    ScaredComponent,
    SheepComponent,
    ShockedComponent,
    ShrugComponent,
    ShyComponent,
    SleepComponent,
    SmileComponent,
    SparkleComponent,
    SpinComponent,
    SurprisedComponent,
    SweatComponent,
    TakeABowComponent,
    ThatsItComponent,
    ThumbsUpComponent,
    TrembleComponent,
    TryMyBestComponent,
    UnicodeComponent,
    UpsetComponent,
    VomitComponent,
    WeirdComponent,
    WinkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
