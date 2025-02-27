import { BookOpen, FileText, Youtube } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CSEResources() {
  // Sample data - replace with actual data
  const subjects = [
    {
      name: "Analog Electronic Circuits",
      playlist: "https://youtube.com/playlist?list=PLbCAq4ggAQuED_qF3-7QVpr__ZQMHZB9M&si=eUqGXMTdXAfz93ue",
      papers: [
        { year: "2023", link: "https://drive.google.com/file/d/1igUbFFkGTK9kfbt_mH5q4bIhgqnFqwmt/view?usp=sharing" },
        { year: "2022", link: "https://drive.google.com/file/d/1-Wy1Msi2kErUkOWFJMH2NJYasVfd7-0M/view?usp=sharing" },
        { year: "2020", link: "https://drive.google.com/file/d/16AHcpIVpJYdOfq9OzpZ2lPsycDhsSAIC/view?usp=sharing" },
        { year: "2019", link: "https://drive.google.com/file/d/1SS-JP4nbCHhGhxeTkO0SEZL2UKw3y-dB/view?usp=sharing" },
      ],
    },
    {
      name: "Data Structure & Algorithms",
      playlist: "https://youtube.com/playlist?list=PLbCAq4ggAQuFESrMepMxrcxbKZMW-unTn&si=pxwCKSFgDvtjdjHJ",
      papers: [
        { year: "2023", link: "https://drive.google.com/file/d/1L3iXxEuRTfnwzS96wswFjy2OPbqTA-WU/view?usp=sharing" },
        { year: "2022", link: "https://drive.google.com/file/d/1qp6omIuUw_BdjQro0DXi77sxfFK1eAfz/view?usp=sharing" },
        { year: "2020", link: "https://drive.google.com/file/d/1XIT3kVdCLM25iYrA0NKhaZ2SA9uwT2zh/view?usp=sharing" },
        { year: "2019", link: "https://drive.google.com/file/d/1HX2f8KXSWpVuZAA4-AMUftm3kOM49-mv/view?usp=sharing" },
      ],
    },
    {
      name: "OOPS using C++",
      playlist: "https://youtube.com/playlist?list=example3",
      papers: [
        { year: "2023", link: "https://drive.google.com/file/d/1Rmw-rhK2IYXRJwnrHC7ECyV6odJpmR-k/view?usp=sharing" },
        { year: "2022", link: "https://drive.google.com/file/d/1SG9kfwMc98cud77cO91cibQnc2aj4gL3/view?usp=sharing" },
        { year: "2020", link: "https://drive.google.com/file/d/1pRKs0q9tKtNbV7I4i1mcYvcT1keqtz3m/view?usp=sharing" },
        { year: "2019", link: "https://drive.google.com/file/d/1YgYSFatWASb6X9dK0jH29tsZPEql7pdU/view?usp=sharing" },
      ],
    },
    {
      name: "Technical Writing",
      playlist: "https://youtube.com/playlist?list=PLbCAq4ggAQuFlnr-ag__VmL-cRJn4sgzd&si=mhyXUUk4Fmk6W5xX",
      papers: [
        { year: "2022", link: "https://drive.google.com/file/d/13fAL7g6sHYLm653300ftLzGzTDjGNko-/view?usp=sharing" },
        { year: "2020", link: "https://drive.google.com/file/d/1KynGrhyO10n2N80txeT1ouxDZdkFu8_Z/view?usp=sharing" },
        { year: "2019", link: "https://drive.google.com/file/d/1A8nBpsAmxWcBVsHhIypAkwhaEXtXRDHc/view?usp=sharing" },
      ],
    },
    {
      name: "Mathematics-III",
      playlist: "https://youtube.com/playlist?list=PLTn91u4_rlEaUoVJNsGSU58kfK0l_hupe&si=0nf6YGgcGA6fDAMP",
      papers: [
        { year: "2022", link: "https://drive.google.com/file/d/1FTFeOU3UkI2Pm3EU_ISUgQdU9bCd5N4d/view?usp=sharing" },
        { year: "2020", link: "https://drive.google.com/file/d/1KgJGb4SWr3azmWhV1_omv_WytvYlSQJM/view?usp=sharing" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">CSE 3rd Semester Resources</h1>
          <p className="text-muted-foreground">Access course materials and previous year papers</p>
        </div>

        <Tabs defaultValue="papers" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            
            <TabsTrigger value="papers" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Question Papers
            </TabsTrigger>
            <TabsTrigger value="playlists" className="flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              Video Playlists
            </TabsTrigger>
          </TabsList>

          <TabsContent value="playlists" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {subjects.map((subject) => (
                <Card key={subject.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      {subject.name}
                    </CardTitle>
                    <CardDescription>Complete video solution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={subject.playlist} target="_blank">
                      <Button className="w-full">Watch Playlist</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="papers" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {subjects.map((subject) => (
                <Card key={subject.name}>
                  <CardHeader>
                    <CardTitle>{subject.name}</CardTitle>
                    <CardDescription>Previous year question papers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      {subject.papers.map((paper) => (
                        <Link key={paper.year} href={paper.link}>
                          <Button variant="outline" className="w-full justify-start">
                            <FileText className="mr-2 h-4 w-4" />
                            {paper.year} Question Paper
                          </Button>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Separator className="my-8" />

        <footer className="text-center text-sm text-muted-foreground">
          <p>Design and Developed by CODE CLUB Developement Team.</p>
          <p>&copy; 2025 CODE-CLUB, GEC Jamui. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

