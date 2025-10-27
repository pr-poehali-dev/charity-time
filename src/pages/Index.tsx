import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-primary rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-accent">ВРЕМЯ ПРИШЛО</h1>
                <p className="text-xs text-muted-foreground">Благотворительный фонд</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('main')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
              <button onClick={() => scrollToSection('help')} className="text-sm font-medium hover:text-primary transition-colors">Наша помощь</button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О фонде</button>
              <button onClick={() => scrollToSection('support')} className="text-sm font-medium hover:text-primary transition-colors">Как поддержать</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
            </div>
            <Button onClick={() => scrollToSection('support')} className="bg-secondary hover:bg-secondary/90">
              Помочь сейчас
            </Button>
          </div>
        </nav>
      </header>

      <main>
        <section id="main" className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Помогаем защитникам</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Время пришло
                  </span>
                  <br />
                  помочь тем, кто защищает нас
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Благотворительный фонд "ВРЕМЯ ПРИШЛО" оказывает всестороннюю поддержку участникам СВО. 
                  Мы обеспечиваем необходимым снаряжением, медикаментами и заботой о тех, кто стоит на защите Родины.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button onClick={() => scrollToSection('support')} size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                    <Icon name="Heart" size={20} className="mr-2" />
                    Помочь фонду
                  </Button>
                  <Button onClick={() => scrollToSection('help')} variant="outline" size="lg" className="text-lg px-8">
                    Узнать больше
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground mt-1">Помогли бойцам</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary">50+</div>
                    <div className="text-sm text-muted-foreground mt-1">Проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">24/7</div>
                    <div className="text-sm text-muted-foreground mt-1">Поддержка</div>
                  </div>
                </div>
              </div>
              <div className="relative animate-scale-in">
                <img 
                  src="https://cdn.poehali.dev/projects/9bacb59a-adf9-4749-84e2-3a5cece91c83/files/9ac1b9e5-2301-4367-b291-b2a53360c76e.jpg" 
                  alt="Поддержка защитников" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon name="Shield" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Надёжность</div>
                      <div className="text-sm text-muted-foreground">Прозрачная отчётность</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="help" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Направления нашей помощи</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Мы работаем по нескольким ключевым направлениям, обеспечивая комплексную поддержку защитникам
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Heart',
                  title: 'Медицинская помощь',
                  description: 'Обеспечение медикаментами, средствами первой помощи и медицинским оборудованием',
                  color: 'from-secondary to-secondary/80'
                },
                {
                  icon: 'Package',
                  title: 'Снаряжение и экипировка',
                  description: 'Поставка необходимого снаряжения, одежды и специального оборудования для бойцов',
                  color: 'from-primary to-primary/80'
                },
                {
                  icon: 'Users',
                  title: 'Гуманитарная помощь',
                  description: 'Поддержка семей военнослужащих, помощь в социальной адаптации и реабилитации',
                  color: 'from-accent to-accent/80'
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon name={item.icon} size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-gradient-to-r from-primary/10 via-white to-secondary/10 rounded-2xl p-8">
              <img 
                src="https://cdn.poehali.dev/projects/9bacb59a-adf9-4749-84e2-3a5cece91c83/files/18c6a86f-4c4e-4d71-beff-6ffc5a7abe47.jpg"
                alt="Наша помощь"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gradient-to-b from-primary/5 to-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <img 
                  src="https://cdn.poehali.dev/projects/9bacb59a-adf9-4749-84e2-3a5cece91c83/files/8e10799b-88bb-4466-833e-4d5b977c9d34.jpg"
                  alt="О фонде"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-4xl font-bold">О благотворительном фонде</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    <strong className="text-accent">Благотворительный фонд "ВРЕМЯ ПРИШЛО"</strong> создан для оказания 
                    всесторонней поддержки участникам специальной военной операции и их семьям.
                  </p>
                  <p>
                    Мы работаем напрямую с военнослужащими и их командирами, оперативно реагируя на запросы 
                    и обеспечивая необходимой помощью в кратчайшие сроки.
                  </p>
                  <p>
                    Наша миссия — обеспечить защитников всем необходимым для выполнения боевых задач и 
                    вернуться домой целыми и невредимыми.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md space-y-3">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <Icon name="FileText" size={20} className="text-primary" />
                    Реквизиты фонда
                  </h3>
                  <Separator />
                  <div className="grid gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Полное название:</span>
                      <span className="font-medium text-right">БФ "ВРЕМЯ ПРИШЛО"</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ИНН:</span>
                      <span className="font-medium">9723258826</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Адрес:</span>
                      <span className="font-medium text-right">г. Москва, ул. Краснодарская, 20/1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="support" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold mb-4">Как поддержать фонд</h2>
                <p className="text-lg text-muted-foreground">
                  Каждый рубль идёт на помощь защитникам. Выберите удобный способ поддержки
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="CreditCard" size={24} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Банковский перевод</h3>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <div className="text-muted-foreground text-xs mb-1">Получатель</div>
                        <div className="font-medium">БЛАГОТВОРИТЕЛЬНЫЙ ФОНД "ВРЕМЯ ПРИШЛО"</div>
                      </div>
                      <Separator />
                      <div>
                        <div className="text-muted-foreground text-xs mb-1">Номер счёта</div>
                        <div className="font-mono font-medium">40703810781240000002</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs mb-1">Банк</div>
                        <div className="font-medium">АО "АЛЬФА-БАНК"</div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="text-muted-foreground text-xs mb-1">БИК</div>
                          <div className="font-mono text-xs font-medium">044525593</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground text-xs mb-1">Корр. счёт</div>
                          <div className="font-mono text-xs font-medium">30101810200000000593</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-muted-foreground text-xs mb-1">ИНН банка</div>
                        <div className="font-mono text-xs font-medium">7728168971</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/20 hover:border-secondary transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Smartphone" size={24} className="text-secondary" />
                      </div>
                      <h3 className="text-xl font-bold">Другие способы</h3>
                    </div>
                    <div className="space-y-4">
                      <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                        <Icon name="CreditCard" size={20} className="mr-2" />
                        Перевод по СБП
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        <Icon name="Wallet" size={20} className="mr-2" />
                        Электронные кошельки
                      </Button>
                      <Button variant="outline" className="w-full" size="lg">
                        <Icon name="Building" size={20} className="mr-2" />
                        Юридические лица
                      </Button>
                    </div>
                    <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        Все средства направляются на закупку снаряжения, медикаментов и оказание помощи участникам СВО
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white text-center">
                <Icon name="Shield" size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-2">Прозрачность и отчётность</h3>
                <p className="text-white/90 max-w-2xl mx-auto">
                  Мы публикуем подробные отчёты о расходовании средств. Каждый донор может увидеть, 
                  как его помощь помогла конкретным бойцам на передовой.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-gradient-to-b from-muted/30 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold mb-4">Контакты</h2>
                <p className="text-lg text-muted-foreground">
                  Свяжитесь с нами любым удобным способом
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="MapPin" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium mb-1">Адрес</div>
                        <div className="text-sm text-muted-foreground">
                          109382, г. Москва,<br />
                          ул. Краснодарская, д. 20/1, кв. 86
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Icon name="Mail" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium mb-1">Email</div>
                        <div className="text-sm text-muted-foreground">
                          info@vremyaprishlo.ru
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Icon name="Phone" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium mb-1">Телефон</div>
                        <div className="text-sm text-muted-foreground">
                          +7 (495) 123-45-67
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="FileText" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium mb-1">ИНН</div>
                        <div className="text-sm text-muted-foreground font-mono">
                          9723258826
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Icon name="Building" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium mb-1">Банк</div>
                        <div className="text-sm text-muted-foreground">
                          АО "АЛЬФА-БАНК"<br />
                          г. Москва, ул. Совхозная, д. 39
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <Icon name="Hash" size={20} className="text-primary mt-1" />
                      <div>
                        <div className="font-medium mb-1">БИК</div>
                        <div className="text-sm text-muted-foreground font-mono">
                          044525593
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-accent text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-primary rounded-lg flex items-center justify-center">
                  <Icon name="Heart" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg">ВРЕМЯ ПРИШЛО</div>
                  <div className="text-xs text-white/70">Благотворительный фонд</div>
                </div>
              </div>
              <p className="text-sm text-white/70">
                Помогаем защитникам Родины. Каждый день. Вместе.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('help')} className="block text-white/70 hover:text-white transition-colors">Наша помощь</button>
                <button onClick={() => scrollToSection('about')} className="block text-white/70 hover:text-white transition-colors">О фонде</button>
                <button onClick={() => scrollToSection('support')} className="block text-white/70 hover:text-white transition-colors">Как поддержать</button>
                <button onClick={() => scrollToSection('contacts')} className="block text-white/70 hover:text-white transition-colors">Контакты</button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div>ИНН: 9723258826</div>
                <div>info@vremyaprishlo.ru</div>
                <div>+7 (495) 123-45-67</div>
              </div>
            </div>
          </div>
          
          <Separator className="bg-white/20 mb-8" />
          
          <div className="text-center text-sm text-white/70">
            © 2024 Благотворительный фонд "ВРЕМЯ ПРИШЛО". Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
