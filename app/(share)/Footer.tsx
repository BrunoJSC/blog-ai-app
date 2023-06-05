export default function Footer() {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            minima tempora soluta. Esse temporibus dolores illum, exercitationem
            cum voluptas eaque eum vel animi laborum explicabo quia ratione
            reiciendis et officia.
          </p>
          <p>&copy; Blog of the Future All Rights Reserved.</p>
        </div>

        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">LINKS</h4>
          <p className="my-5">Massa orc senectus</p>
          <p className="my-5">Some random link again</p>
          <p>Ullamcorper Vivamus</p>
        </div>

        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contacts</h4>
          <p className="my-5">Tempus metus muttis risus volutpat egestas.</p>
          <p>(333) 425-6825</p>
        </div>
      </div>
    </footer>
  );
}
